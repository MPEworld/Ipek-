#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const BASE_URL = "https://www.pilot-ipek.ru";
const SCHEDULE_URL = `${BASE_URL}/schedule.html`;
const MONTHS = {
  января: "01",
  февраля: "02",
  марта: "03",
  апреля: "04",
  мая: "05",
  июня: "06",
  июля: "07",
  августа: "08",
  сентября: "09",
  октября: "10",
  ноября: "11",
  декабря: "12"
};

const outIndex = process.argv.indexOf("--out");
const outFile = outIndex >= 0 ? process.argv[outIndex + 1] : "data.js";

main().catch((error) => {
  console.error(`Не удалось обновить расписание: ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  const scheduleHtml = await fetchText(SCHEDULE_URL);
  assertNotBlocked(scheduleHtml, SCHEDULE_URL);

  const dayLinks = extractDayLinks(scheduleHtml);
  if (!dayLinks.length) {
    throw new Error("на официальной странице не найдены ссылки на дни расписания");
  }

  const days = [];
  for (let i = 0; i < dayLinks.length; i++) {
    const link = dayLinks[i];
    if (i > 0) await new Promise((resolve) => setTimeout(resolve, 800));
    const html = await fetchText(link.url);
    assertNotBlocked(html, link.url);
    const tables = extractTables(html);
    if (!tables.length) continue;

    expandDayLink(link).forEach((day) => {
      days.push({
        ...day,
        url: link.url,
        titleText: extractTitle(html),
        tables
      });
    });
  }

  if (!days.length) {
    throw new Error("таблицы расписания не найдены");
  }

  days.sort((a, b) => a.id.localeCompare(b.id));
  const target = path.resolve(process.cwd(), outFile);
  fs.writeFileSync(target, `window.IPEK_RAW_DAYS = ${JSON.stringify(days, null, 2)};\n`);
  console.log(`Готово: ${days.length} дней записано в ${target}`);
}

async function fetchText(url, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const response = await fetch(url, {
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-language": "ru-RU,ru;q=0.9,en;q=0.5"
      }
    });
    if (!response.ok) {
      if (attempt < retries) {
        const delay = attempt * 2000;
        console.log(`${url} ответил ${response.status}, повтор через ${delay}ms (попытка ${attempt}/${retries})`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        continue;
      }
      throw new Error(`${url} ответил статусом ${response.status}`);
    }
    return response.text();
  }
}

function assertNotBlocked(html, url) {
  if (/Access Denied|Oh noes|Anubis/i.test(html)) {
    throw new Error(`${url} сейчас закрыт защитной страницей, data.js не изменён`);
  }
}

function extractDayLinks(html) {
  const links = [];
  const seen = new Set();
  const linkRe = /<a\b[^>]*href=["']([^"']*raspo\/[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;

  while ((match = linkRe.exec(html))) {
    const url = new URL(match[1], BASE_URL).href;
    const label = htmlToText(match[2]);
    if (!label || seen.has(url)) continue;
    seen.add(url);
    links.push({ label, url, urlPart: decodeURIComponent(url.split("/").pop() || label) });
  }

  return links;
}

function expandDayLink(link) {
  const source = link.urlPart || link.label;
  const year = new Date().getFullYear();
  const parts = [...source.matchAll(/(\d{1,2})\s*([а-яё]+)/gi)]
    .map((match) => {
      const day = match[1].padStart(2, "0");
      const monthName = match[2].toLowerCase();
      const month = MONTHS[monthName];
      if (!month) return null;
      return {
        id: `${year}-${month}-${day}`,
        label: `${Number(day)} ${monthName}`,
        urlPart: link.urlPart
      };
    })
    .filter(Boolean);

  if (parts.length) return parts;
  return [{ id: source, label: link.label || source, urlPart: link.urlPart }];
}

function extractTitle(html) {
  const heading = html.match(/<h[1-3]\b[^>]*>([\s\S]*?)<\/h[1-3]>/i);
  if (heading) return htmlToText(heading[1]);
  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  return title ? htmlToText(title[1]) : "";
}

function extractTables(html) {
  const tables = [];
  const tableRe = /<table\b[^>]*>([\s\S]*?)<\/table>/gi;
  let tableMatch;

  while ((tableMatch = tableRe.exec(html))) {
    const rows = [];
    const rowRe = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
    let rowMatch;

    while ((rowMatch = rowRe.exec(tableMatch[1]))) {
      const cells = [];
      const cellRe = /<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi;
      let cellMatch;
      while ((cellMatch = cellRe.exec(rowMatch[1]))) {
        cells.push(htmlToText(cellMatch[1]));
      }
      if (cells.length) rows.push(cells);
    }

    if (rows.length > 1) tables.push(rows);
  }

  return tables;
}

function htmlToText(value) {
  return String(value || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|tr|td|th)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&laquo;/g, "«")
    .replace(/&raquo;/g, "»")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
