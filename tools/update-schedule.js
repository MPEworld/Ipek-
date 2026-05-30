#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const BASE_URL = "https://www.pilot-ipek.ru";
const LIST_API_URL = `${BASE_URL}/api/get_list`;
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
const MONTH_KEYS = {
  Январь: "01",
  Февраль: "02",
  Март: "03",
  Апрель: "04",
  Май: "05",
  Июнь: "06",
  Июль: "07",
  Август: "08",
  Сентябрь: "09",
  Октябрь: "10",
  Ноябрь: "11",
  Декабрь: "12"
};

const outIndex = process.argv.indexOf("--out");
const outFile = outIndex >= 0 ? process.argv[outIndex + 1] : "data.js";

main().catch((error) => {
  console.error(`Не удалось обновить расписание: ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  const list = await fetchJson(LIST_API_URL);
  if (!list || typeof list !== "object") {
    throw new Error("API /api/get_list вернул некорректный ответ");
  }

  const dayLinks = buildDayLinks(list);
  if (!dayLinks.length) {
    throw new Error("в ответе /api/get_list не оказалось ни одной даты");
  }

  console.log(`Найдено ${dayLinks.length} дат, начинаю загрузку`);

  const days = [];
  for (let i = 0; i < dayLinks.length; i++) {
    const link = dayLinks[i];
    if (i > 0) await sleep(800);

    try {
      const html = await fetchText(link.url);
      assertNotBlocked(html, link.url);
      const tables = extractTables(html);
      if (!tables.length) {
        console.log(`Пропускаю ${link.label}: таблиц не найдено`);
        continue;
      }

      expandDayLink(link).forEach((day) => {
        days.push({
          ...day,
          url: link.url,
          titleText: extractTitle(html),
          tables
        });
      });
    } catch (error) {
      console.log(`Ошибка по ${link.label}: ${error.message}`);
    }
  }

  if (!days.length) {
    throw new Error("ни одной таблицы расписания не получено");
  }

  days.sort((a, b) => a.id.localeCompare(b.id));
  const target = path.resolve(process.cwd(), outFile);
  fs.writeFileSync(target, `window.IPEK_RAW_DAYS = ${JSON.stringify(days, null, 2)};\n`);
  console.log(`Готово: ${days.length} дней записано в ${target}`);
}

function buildDayLinks(list) {
  const seen = new Set();
  const links = [];
  const currentMonthKey = list["Текущий месяц"];
  const currentMonthNumber = MONTH_KEYS[currentMonthKey] || String(new Date().getMonth() + 1).padStart(2, "0");

  for (const monthName of Object.keys(list)) {
    const monthNumber = MONTH_KEYS[monthName];
    if (!monthNumber) continue;
    const values = list[monthName];
    if (!Array.isArray(values)) continue;

    for (const value of values) {
      const label = String(value || "").trim();
      if (!label) continue;
      const urlPart = label;
      const url = `${BASE_URL}/raspo/${encodeURIComponent(urlPart)}`;
      if (seen.has(url)) continue;
      seen.add(url);
      links.push({ label, url, urlPart, monthNumber, currentMonthNumber });
    }
  }

  return links;
}

function expandDayLink(link) {
  const source = link.urlPart || link.label;
  const year = inferAcademicYear(link.monthNumber, link.currentMonthNumber);
  const parts = [...source.matchAll(/(\d{1,2})\s*([а-яё]+)/gi)]
    .map((match) => {
      const day = match[1].padStart(2, "0");
      const monthName = match[2].toLowerCase();
      const month = MONTHS[monthName];
      if (!month) return null;
      const partYear = inferAcademicYear(month, link.currentMonthNumber);
      return {
        id: `${partYear}-${month}-${day}`,
        label: `${Number(day)} ${monthName}`,
        urlPart: link.urlPart
      };
    })
    .filter(Boolean);

  if (parts.length) return parts;
  return [{ id: `${year}-${link.monthNumber || "01"}-01`, label: link.label || source, urlPart: link.urlPart }];
}

function inferAcademicYear(monthNumber, currentMonthNumber) {
  const now = new Date();
  const calendarYear = now.getFullYear();
  const calendarMonth = now.getMonth() + 1;
  const referenceMonth = parseInt(currentMonthNumber, 10) || calendarMonth;
  const targetMonth = parseInt(monthNumber, 10);
  if (!targetMonth) return calendarYear;

  if (referenceMonth >= 9 && targetMonth < 9) return calendarYear + 1;
  if (referenceMonth <= 6 && targetMonth >= 9) return calendarYear - 1;
  return calendarYear;
}

async function fetchJson(url, retries = 3) {
  const text = await fetchText(url, retries);
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`${url} вернул не JSON: ${error.message}`);
  }
}

async function fetchText(url, retries = 3) {
  let lastError;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
          accept: "text/html,application/xhtml+xml,application/xml,application/json;q=0.9,*/*;q=0.8",
          "accept-language": "ru-RU,ru;q=0.9,en;q=0.5",
          referer: BASE_URL
        }
      });
      if (!response.ok) throw new Error(`${url} ответил статусом ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        const delay = attempt * 2000;
        console.log(`Попытка ${attempt}/${retries} не удалась (${error.message}), повтор через ${delay}ms`);
        await sleep(delay);
      }
    }
  }
  throw lastError;
}

function assertNotBlocked(html, url) {
  if (/Access Denied|Oh noes|Anubis/i.test(html)) {
    throw new Error(`${url} закрыт защитной страницей`);
  }
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
