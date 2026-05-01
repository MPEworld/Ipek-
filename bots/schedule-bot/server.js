const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const PORT = Number(process.env.PORT || 8787);
const ROOT = path.resolve(__dirname, "../..");
const DATA_FILE = path.join(ROOT, "data.js");
const SITE_URL = process.env.SITE_URL || "";
const NEWS_URL = "https://ciur.ru/ipek/Lists/News/AllItems.aspx";

const HELP = [
  "ИПЭК расписание",
  "/today В-25-1 — пары группы",
  "/teacher Созонова — пары преподавателя",
  "/week В-25-1 — пример недели",
  "/events — новости и мероприятия"
].join("\n");

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET" && req.url === "/health") {
      sendJson(res, 200, { ok: true });
      return;
    }

    if (req.method === "POST" && req.url === "/telegram") {
      const update = await readJson(req);
      const chatId = update.message?.chat?.id || update.edited_message?.chat?.id;
      const text = update.message?.text || update.edited_message?.text || "";
      const answer = handleCommand(text);
      if (chatId) await sendTelegram(chatId, answer);
      sendJson(res, 200, { ok: true });
      return;
    }

    if (req.method === "POST" && req.url === "/max") {
      const update = await readJson(req);
      const chatId = update.chat_id || update.message?.chat_id || update.message?.recipient?.chat_id;
      const text = update.text || update.message?.text || "";
      const answer = handleCommand(text);
      if (chatId) await sendMax(chatId, answer);
      sendJson(res, 200, { ok: true });
      return;
    }

    sendJson(res, 404, { ok: false, error: "Not found" });
  } catch (error) {
    console.error(error);
    sendJson(res, 500, { ok: false, error: "Internal error" });
  }
});

server.listen(PORT, () => {
  console.log(`IPEK schedule bot listening on ${PORT}`);
});

function handleCommand(input) {
  const text = String(input || "").trim();
  const [command, ...rest] = text.split(/\s+/);
  const baseCommand = command.split("@")[0];
  const query = rest.join(" ").trim();

  if (!text || baseCommand === "/start" || baseCommand === "/help") return HELP;
  if (baseCommand === "/events") return `Новости и мероприятия ИПЭК:\n${NEWS_URL}`;
  if (baseCommand === "/today") return formatGroupSchedule(query);
  if (baseCommand === "/teacher") return formatTeacherSchedule(query);
  if (baseCommand === "/week") return formatWeekForecast(query);

  if (/^[А-ЯЁA-Z]-?\d{2}-?\d$/i.test(text)) return formatGroupSchedule(text);
  return "Не понял команду.\n\n" + HELP;
}

function formatGroupSchedule(groupInput) {
  const group = clean(groupInput);
  if (!group) return "Напишите группу: /today В-25-1";
  const days = loadDays();
  const rows = makeRows(days).filter((row) => same(row.group, group) && row.text);
  const day = nearestDayWithRows(days, rows);
  if (!day) return `Для группы ${group} занятий в загруженных днях не найдено.`;

  const items = rows
    .filter((row) => row.dayId === day.id)
    .sort((a, b) => a.order - b.order)
    .map((row) => `• ${row.pair} ${row.time}: ${shortLesson(row.text)}`)
    .slice(0, 8);

  return [`${day.id === todayIso() ? "Сегодня" : "Ближайший день"}: ${day.label}, ${group}`, ...items, siteLine()].filter(Boolean).join("\n");
}

function formatTeacherSchedule(nameInput) {
  const name = clean(nameInput);
  if (!name) return "Напишите фамилию: /teacher Созонова";
  const days = loadDays();
  const rows = makeRows(days).filter((row) => includesNorm(row.text, name));
  const day = nearestDayWithRows(days, rows);
  if (!day) return `Для «${name}» занятий в загруженных днях не найдено.`;

  const items = rows
    .filter((row) => row.dayId === day.id)
    .sort((a, b) => a.order - b.order || a.group.localeCompare(b.group, "ru"))
    .map((row) => `• ${row.pair} ${row.time}: ${row.group} — ${shortLesson(row.text)}`)
    .slice(0, 10);

  return [`${day.id === todayIso() ? "Сегодня" : "Ближайший день"}: ${day.label}, ${name}`, ...items, siteLine()].filter(Boolean).join("\n");
}

function formatWeekForecast(groupInput) {
  const group = clean(groupInput);
  if (!group) return "Напишите группу: /week В-25-1";
  const rows = makeRows(loadDays()).filter((row) => same(row.group, group) && row.text);
  if (!rows.length) return `Для группы ${group} пока нет данных для статистики.`;

  const weekdays = new Map();
  rows.forEach((row) => {
    const date = new Date(`${row.dayId}T12:00:00`);
    const key = (date.getDay() + 6) % 7;
    const label = new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(date);
    const bucket = weekdays.get(key) || { label, subjects: new Map(), count: 0 };
    const subject = lessonSubject(row.text);
    bucket.count += 1;
    bucket.subjects.set(subject, (bucket.subjects.get(subject) || 0) + 1);
    weekdays.set(key, bucket);
  });

  const lines = Array.from(weekdays.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([, item]) => {
      const subjects = Array.from(item.subjects, ([subject, count]) => ({ subject, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 2)
        .map((item) => item.subject)
        .join(", ");
      return `• ${item.label}: ${subjects} (${item.count})`;
    });

  return [`Пример недели для ${group} по загруженным дням:`, ...lines, siteLine()].filter(Boolean).join("\n");
}

function loadDays() {
  const code = fs.readFileSync(DATA_FILE, "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: DATA_FILE });
  return Array.isArray(sandbox.window.IPEK_RAW_DAYS) ? sandbox.window.IPEK_RAW_DAYS : [];
}

function makeRows(days) {
  const rows = [];
  days.forEach((day) => {
    (day.tables || []).forEach((table) => {
      const groups = (table[0] || []).slice(1).map(clean);
      table.slice(1).forEach((line, rowIndex) => {
        const slot = parseSlot(line[0] || "", rowIndex);
        groups.forEach((group, index) => {
          rows.push({
            dayId: day.id,
            dayLabel: day.label,
            group,
            pair: slot.pair,
            time: slot.time,
            order: slot.order,
            text: clean(line[index + 1] || "")
          });
        });
      });
    });
  });
  return rows;
}

function nearestDayWithRows(days, rows) {
  const ids = new Set(rows.map((row) => row.dayId));
  return days.find((day) => day.id === todayIso() && ids.has(day.id))
    || days.find((day) => day.id >= todayIso() && ids.has(day.id))
    || days.filter((day) => ids.has(day.id)).at(-1);
}

function parseSlot(value, index) {
  const text = clean(value);
  const time = text.match(/(\d{1,2}[.:]\d{2})\s*[-–]\s*(\d{1,2}[.:]\d{2})/);
  return {
    pair: text.match(/^\d+\s*пара/i)?.[0] || `${index + 1} пара`,
    time: time ? `${time[1].replace(".", ":")} - ${time[2].replace(".", ":")}` : "",
    order: index + 1
  };
}

function shortLesson(value) {
  return clean(value)
    .split(/\n+/)
    .filter(Boolean)
    .slice(0, 3)
    .join(" · ");
}

function lessonSubject(value) {
  return clean(value).split(/\n+/).find(Boolean) || "Занятие";
}

function siteLine() {
  return SITE_URL ? `\nСайт: ${SITE_URL}` : "";
}

function todayIso() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function includesNorm(value, query) {
  return norm(value).includes(norm(query));
}

function same(left, right) {
  return norm(left) === norm(right);
}

function norm(value) {
  return clean(value).toLowerCase().replace(/ё/g, "е");
}

function clean(value) {
  return String(value || "").replace(/\u00a0/g, " ").trim();
}

async function sendTelegram(chatId, text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    console.log("[telegram dry-run]", chatId, text);
    return;
  }

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true })
  });
}

async function sendMax(chatId, text) {
  const token = process.env.MAX_BOT_TOKEN;
  const url = process.env.MAX_API_URL;
  if (!token || !url) {
    console.log("[max dry-run]", chatId, text);
    return;
  }

  await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ chat_id: chatId, text })
  });
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) req.destroy();
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, value) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(value));
}
