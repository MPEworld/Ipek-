const ICONS = {
  "badge-check": '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v1.5"/><path d="M12 19.5V21"/><path d="M3 12h1.5"/><path d="M19.5 12H21"/><path d="m5.6 5.6 1 1"/><path d="m17.4 17.4 1 1"/><path d="m5.6 18.4 1-1"/><path d="m17.4 6.6 1-1"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  "bar-chart-3": '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  bell: '<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  "calendar-days": '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  "check-circle-2": '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  "clock-3": '<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',
  "external-link": '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  "graduation-cap": '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  "layout-list": '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M14 4h7"/><path d="M14 9h7"/><path d="M14 15h7"/><path d="M14 20h7"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.08-7.08l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.08 7.08l1.71-1.71"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7"/>',
  "map-pin": '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
  newspaper: '<path d="M4 22h16a2 2 0 0 0 2-2V4H6a2 2 0 0 0-2 2v14a2 2 0 0 1-2-2V5"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h5"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.92.33 1.82.62 2.68a2 2 0 0 1-.45 2.11L8.09 9.7a16 16 0 0 0 6.2 6.2l1.2-1.2a2 2 0 0 1 2.11-.45c.86.29 1.76.5 2.68.62A2 2 0 0 1 22 16.92Z"/>',
  "refresh-cw": '<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M16 8h5V3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  "search-x": '<path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.5a2 2 0 0 1-1 1.73l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.73v-.5a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.5 8.8a1.5 1.5 0 0 1-1 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .7-1l7-2.5a1 1 0 0 1 .6 0l7 2.5a1 1 0 0 1 .7 1Z"/><path d="m9 12 2 2 4-4"/>',
  sparkles: '<path d="m12 3-1.9 5.1L5 10l5.1 1.9L12 17l1.9-5.1L19 10l-5.1-1.9Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/>',
  star: '<path d="M11.5 2.9a.55.55 0 0 1 1 0l2.1 4.25 4.7.68a.55.55 0 0 1 .3.94l-3.4 3.32.8 4.68a.55.55 0 0 1-.8.58L12 15.12l-4.2 2.23a.55.55 0 0 1-.8-.58l.8-4.68-3.4-3.32a.55.55 0 0 1 .3-.94l4.7-.68z"/>',
  "table-2": '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0-12h12M3 9h18M3 9v10a2 2 0 0 0 2 2h4m12-12v10a2 2 0 0 1-2 2H9"/>',
  user: '<path d="M19 21a7 7 0 0 0-14 0"/><circle cx="12" cy="7" r="4"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
};

const BELLS = {
  weekday: [
    ["1 пара", "8:30 - 10:00"],
    ["2 пара", "10:10 - 11:40"],
    ["3 пара", "12:00 - 13:30"],
    ["4 пара", "13:40 - 15:10"],
    ["5 пара", "15:30 - 17:00"],
    ["6 пара", "17:10 - 18:40"],
    ["7 пара", "18:50 - 20:20"]
  ],
  saturday: [
    ["1 пара", "8:30 - 10:00"],
    ["2 пара", "10:05 - 11:35"],
    ["3 пара", "11:55 - 13:25"],
    ["4 пара", "13:30 - 15:00"],
    ["5 пара", "15:05 - 16:35"],
    ["6 пара", "16:40 - 18:10"]
  ]
};

const FUTURE_CODE_URL = "https://lms.1t.ru/welcome/rosnou.html";
const TEACHER_SOURCE_URL = "https://ciur.ru/ipek/SiteAssets/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE.%20%D0%9F%D0%B5%D0%B4%D0%B0%D0%B3%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2/%D1%81%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BD%D0%B0%2009.11.%2020.pdf";
const OFFICIAL_TEACHER_PROFILES = {
  Артемичева: {
    fullName: "Артемичева Елена Рудольфовна",
    role: "преподаватель спецдисциплин",
    category: "высшая категория",
    areas: ["гражданское право", "экологическое право"]
  },
  Баранова: {
    fullName: "Баранова Елена Владимировна",
    role: "преподаватель",
    areas: ["история", "конституционное право", "криминалистика"]
  },
  Бывальцева: {
    fullName: "Бывальцева Марина Валерьевна",
    role: "преподаватель",
    areas: ["предпринимательство", "рынок труда", "теория государства и права"]
  },
  Жуйков: {
    fullName: "Жуйков Вениамин Николаевич",
    role: "преподаватель спецдисциплин",
    category: "высшая категория",
    areas: ["математика", "информатика", "периферийное оборудование"]
  },
  Жуйкова: {
    fullName: "Жуйкова Лариса Павловна",
    role: "преподаватель",
    areas: ["информатика", "информационные технологии", "компьютерные сети"]
  },
  Занина: {
    fullName: "Занина Татьяна Павловна",
    role: "заведующая отделением, преподаватель",
    areas: ["физика", "естествознание", "технология учебной деятельности"]
  },
  Зорина: {
    fullName: "Зорина Марина Александровна",
    role: "педагог-психолог, преподаватель",
    category: "высшая категория",
    areas: ["психология", "социальная педагогика", "правоохранительные органы"]
  },
  Зылева: {
    fullName: "Зылева Елена Анатольевна",
    role: "преподаватель",
    category: "первая категория",
    areas: ["алгоритмизация", "теория информации", "информационные технологии"]
  },
  Камашева: {
    fullName: "Камашева Анна Алексеевна",
    role: "преподаватель спецдисциплин",
    category: "высшая категория",
    areas: ["информационные технологии", "платформы разработки", "теория вероятностей"]
  },
  Михалкина: {
    fullName: "Михалкина Екатерина Александровна",
    role: "преподаватель",
    category: "первая категория",
    areas: ["предпринимательство", "административное право", "правовые основы"]
  },
  Ошуркова: {
    fullName: "Ошуркова Лидия Николаевна",
    role: "преподаватель",
    areas: ["математика", "алгебра", "геометрия"]
  },
  Ощепков: {
    fullName: "Ощепков Михаил Андреевич",
    role: "преподаватель",
    areas: ["история", "обществознание"]
  },
  Перевозчиков: {
    fullName: "Перевозчиков Алексей Борисович",
    role: "преподаватель",
    category: "первая категория",
    areas: ["физическая культура"]
  },
  Петрова: {
    fullName: "Петрова Галина Александровна",
    role: "преподаватель",
    category: "высшая категория",
    areas: ["химия", "материаловедение", "испытание сварных соединений"]
  },
  Петухова: {
    fullName: "Петухова Наталья Петровна",
    role: "заместитель директора по учебной работе, преподаватель",
    category: "высшая категория",
    areas: ["бухгалтерский учет", "анализ и аудит", "профессия: ОК профессионала"]
  },
  Пушин: {
    fullName: "Пушин Александр Александрович",
    role: "мастер производственного обучения, преподаватель",
    category: "первая категория",
    areas: ["электрооборудование", "электромонтажные работы", "технологические процессы"]
  },
  Пушкарев: {
    fullName: "Пушкарев Владимир Викторович",
    role: "мастер производственного обучения",
    areas: ["сварка", "сварочное оборудование", "сварные конструкции"]
  },
  Рахимьянова: {
    fullName: "Рахимьянова Ольга Трифоновна",
    role: "преподаватель",
    category: "высшая категория",
    areas: ["информатика и ИКТ", "Moodle", "информационные технологии"]
  },
  Сабурова: {
    fullName: "Сабурова Татьяна Леонидовна",
    role: "преподаватель",
    areas: ["английский язык"]
  },
  Тику: {
    fullName: "Тику Наталья",
    role: "преподаватель",
    areas: ["английский язык"]
  },
  "Чермных С.В.": {
    fullName: "Чермных Светлана Викторовна",
    role: "преподаватель",
    areas: ["немецкий язык"]
  },
  "Ефремова И.Ю.": {
    fullName: "Ефремова Инна Юрьевна",
    role: "преподаватель",
    category: "первая категория",
    areas: ["история", "обществознание"]
  },
  "Кузнецова О.В.": {
    fullName: "Кузнецова Ольга Валерьевна",
    role: "преподаватель спецдисциплин",
    category: "первая категория",
    areas: ["информатика", "информационные технологии", "профессиональная деятельность"]
  },
  Васильев: {
    fullName: "Васильев Николай Яковлевич",
    role: "преподаватель",
    category: "первая категория",
    areas: ["история", "обществознание"]
  },
  Веселкова: {
    fullName: "Веселкова Ольга Александровна",
    role: "преподаватель спецдисциплин",
    category: "первая категория",
    areas: ["тактико-специальная подготовка"]
  },
  Волкова: {
    fullName: "Волкова Оксана Алексеевна",
    role: "преподаватель",
    areas: ["английский язык"]
  },
  Самойленко: {
    fullName: "Самойленко Светлана Леонидовна",
    role: "преподаватель",
    areas: ["теплотехническое оборудование", "машиностроение", "металлорежущие станки"]
  },
  Созонова: {
    fullName: "Созонова Елена Аркадьевна",
    role: "преподаватель",
    category: "высшая категория",
    areas: ["русский язык", "литература"]
  },
  Тимошкин: {
    fullName: "Тимошкин Николай Ильич",
    role: "заведующий практикой, преподаватель",
    category: "первая категория",
    areas: ["математика", "физика", "обществознание"]
  },
  Феденев: {
    fullName: "Феденев Александр Вячеславович",
    role: "преподаватель",
    category: "первая категория",
    areas: ["физическая культура"]
  }
};
const rawDays = prepareRawDays(Array.isArray(window.IPEK_RAW_DAYS) ? window.IPEK_RAW_DAYS : []);
const days = rawDays.map(normalizeDay).sort(compareDays);
const savedProfile = readProfile();
const savedGroup = readStorage("ipek-selected-group");
const savedRtxFx = readStorage("ipek-rtx-fx") || readStorage("ipek-rtx-mode");
const savedMode = readStorage("ipek-ui-mode");
const savedTheme = readStorage("ipek-ui-theme") || "default";
const savedTeacherKey = readStorage("ipek-teacher-key");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialMode = savedMode === "dark" || savedMode === "light" ? savedMode : (prefersDark ? "dark" : "light");
const todayId = toISODate(new Date());
const defaultDay = days.find((day) => day.id === todayId) || days[0];
const defaultGroup = chooseDefaultGroup(defaultDay, savedProfile.group || savedGroup);

const state = {
  dayId: defaultDay ? defaultDay.id : "",
  group: defaultGroup,
  view: "cards",
  query: "",
  filters: new Set(["filled"]),
  bells: "weekday",
  profile: savedProfile,
  mode: initialMode,
  teacherKey: savedTeacherKey || ""
};

const els = {
  dateStrip: document.querySelector("#date-strip"),
  search: document.querySelector("#search-input"),
  group: document.querySelector("#group-select"),
  summary: document.querySelector("#summary-grid"),
  activeDayLabel: document.querySelector("#active-day-label"),
  activeTitle: document.querySelector("#active-title"),
  cards: document.querySelector("#cards-view"),
  table: document.querySelector("#table-view"),
  empty: document.querySelector("#empty-state"),
  saveGroup: document.querySelector("#save-group-btn"),
  now: document.querySelector("#now-box"),
  bells: document.querySelector("#bells-list"),
  student: document.querySelector("#student-pill"),
  suggestions: document.querySelector("#search-suggestions"),
  stats: document.querySelector("#stats-content"),
  profilePreview: document.querySelector("#profile-preview"),
  profileName: document.querySelector("#profile-name"),
  profileGroup: document.querySelector("#profile-group"),
  profileSave: document.querySelector("#profile-save"),
  profileClear: document.querySelector("#profile-clear"),
  teacherSearch: document.querySelector("#teacher-search"),
  teachersGrid: document.querySelector("#teachers-grid"),
  teacherDaySelect: document.querySelector("#teacher-day-select"),
  teacherDayContent: document.querySelector("#teacher-day-content")
};
const rtxToggle = document.querySelector("#rtx-toggle");
const modeToggle = document.querySelector("#mode-toggle");
const settingsToggle = document.querySelector("#settings-toggle");
const settingsPanel = document.querySelector("#settings-panel");
const settingsClose = document.querySelector("#settings-close");
const statsToggle = document.querySelector("#stats-toggle");
const statsPanel = document.querySelector("#stats-panel");
const statsClose = document.querySelector("#stats-close");
let renderFrame = 0;
let teacherDirectoryCache = null;

bootstrap();

function bootstrap() {
  setMode(state.mode);
  setAccentTheme(savedTheme);
  setRtxFx(savedRtxFx === "on");

  if (!days.length) {
    renderDataError();
    return;
  }

  if (state.group && !getActiveDay().groups.includes(state.group)) {
    state.group = chooseDefaultGroup(getActiveDay(), "");
  }

  renderDates();
  renderGroupOptions();
  renderProfileControls();
  renderTeachers();
  renderTeacherDayControls();
  renderTeacherDaySchedule();
  renderBells();
  bindEvents();
  render();
}

function bindEvents() {
  els.search.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderSearchSuggestions();
    scheduleRender();
  });

  els.search.addEventListener("focus", renderSearchSuggestions);
  els.search.addEventListener("click", renderSearchSuggestions);

  els.group.addEventListener("change", (event) => {
    state.group = event.target.value;
    setSearchSuggestionsOpen(false);
    transitionRender();
  });

  els.profileName?.addEventListener("input", renderProfilePreview);
  els.profileGroup?.addEventListener("change", renderProfilePreview);
  els.teacherSearch?.addEventListener("input", renderTeachers);
  els.teacherDaySelect?.addEventListener("change", (event) => {
    state.teacherKey = event.target.value;
    writeStorage("ipek-teacher-key", state.teacherKey);
    renderTeacherDaySchedule();
    if (statsPanel?.hidden === false) renderStats();
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) {
      closeSettingsIfOutside(event.target);
      closeStatsIfOutside(event.target);
      closeSearchSuggestionsIfOutside(event.target);
      return;
    }

    if (button.id === "settings-toggle") {
      setSettingsOpen(settingsPanel?.hidden !== false);
      return;
    }

    if (button.id === "stats-toggle") {
      setStatsOpen(statsPanel?.hidden !== false);
      return;
    }

    if (button.id === "stats-close") {
      setStatsOpen(false);
      return;
    }

    if (button.id === "settings-close") {
      setSettingsOpen(false);
      return;
    }

    if (button.dataset.themeChoice) {
      const theme = button.dataset.themeChoice;
      transitionTheme(() => setAccentTheme(theme));
      writeStorage("ipek-ui-theme", theme);
      return;
    }

    if (button.id === "profile-save") {
      saveProfileFromControls();
      return;
    }

    if (button.id === "profile-clear") {
      clearProfile();
      return;
    }

    if (button.dataset.suggestionValue) {
      applySearchSuggestion(button);
      return;
    }

    if (button.dataset.day) {
      setSettingsOpen(false);
      setStatsOpen(false);
      setSearchSuggestionsOpen(false);
      state.dayId = button.dataset.day;
      if (state.group && !getActiveDay().groups.includes(state.group)) {
        state.group = chooseDefaultGroup(getActiveDay(), getPreferredGroup());
      }
      transitionRender();
      return;
    }

    if (button.dataset.view) {
      setSettingsOpen(false);
      setStatsOpen(false);
      setSearchSuggestionsOpen(false);
      state.view = button.dataset.view;
      transitionRender();
      return;
    }

    if (button.dataset.filter) {
      setSettingsOpen(false);
      setStatsOpen(false);
      setSearchSuggestionsOpen(false);
      const filter = button.dataset.filter;
      if (state.filters.has(filter)) {
        state.filters.delete(filter);
      } else {
        state.filters.add(filter);
      }
      transitionRender();
      return;
    }

    if (button.dataset.bells) {
      setSettingsOpen(false);
      setStatsOpen(false);
      setSearchSuggestionsOpen(false);
      state.bells = button.dataset.bells;
      renderBells();
    }

    closeSettingsIfOutside(event.target);
    closeStatsIfOutside(event.target);
    closeSearchSuggestionsIfOutside(event.target);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setSettingsOpen(false);
      setStatsOpen(false);
      setSearchSuggestionsOpen(false);
    }
  });

  rtxToggle?.addEventListener("click", () => {
    const next = !document.body.classList.contains("rtx-fx");
    transitionTheme(() => setRtxFx(next));
    writeStorage("ipek-rtx-fx", next ? "on" : "off");
  });

  modeToggle?.addEventListener("click", () => {
    const next = state.mode === "dark" ? "light" : "dark";
    transitionTheme(() => setMode(next));
    writeStorage("ipek-ui-mode", next);
  });

  els.saveGroup.addEventListener("click", () => {
    if (!state.group) return;
    writeStorage("ipek-selected-group", state.group);
    renderSaveButton();
    renderStudentPill();
  });
}

function setSettingsOpen(open) {
  if (!settingsPanel || !settingsToggle) return;
  if (open) {
    setStatsOpen(false);
    renderProfileControls();
  }
  settingsPanel.hidden = !open;
  settingsToggle.setAttribute("aria-expanded", String(open));
}

function closeSettingsIfOutside(target) {
  if (!settingsPanel || !settingsToggle || settingsPanel.hidden) return;
  if (settingsPanel.contains(target) || settingsToggle.contains(target)) return;
  setSettingsOpen(false);
}

function setStatsOpen(open) {
  if (!statsPanel || !statsToggle) return;
  if (open) {
    setSettingsOpen(false);
    renderStats();
  }
  statsPanel.hidden = !open;
  statsToggle.setAttribute("aria-expanded", String(open));
}

function closeStatsIfOutside(target) {
  if (!statsPanel || !statsToggle || statsPanel.hidden) return;
  if (statsPanel.contains(target) || statsToggle.contains(target)) return;
  setStatsOpen(false);
}

function setRtxFx(enabled) {
  document.body.classList.toggle("rtx-fx", enabled);
  if (rtxToggle) {
    rtxToggle.classList.toggle("is-active", enabled);
    rtxToggle.setAttribute("aria-pressed", String(enabled));
  }
}

function setMode(mode) {
  const safeMode = mode === "dark" ? "dark" : "light";
  state.mode = safeMode;
  document.body.dataset.mode = safeMode;
  updateThemeColor();
  if (modeToggle) {
    const isDark = safeMode === "dark";
    modeToggle.setAttribute("aria-pressed", String(isDark));
    modeToggle.setAttribute("aria-label", isDark ? "Включить светлый режим" : "Включить тёмный режим");
  }
}

function setAccentTheme(theme) {
  const safeTheme = ["default", "campus", "sky", "mint", "rose", "graphite", "liquid"].includes(theme) ? theme : "default";
  document.body.dataset.theme = safeTheme;
  updateThemeColor();
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.setAttribute("aria-checked", String(button.dataset.themeChoice === safeTheme));
  });
}

function updateThemeColor() {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) return;
  if (state.mode === "dark") {
    const darkColors = {
      default: "#090a0c",
      campus: "#08080a",
      sky: "#071018",
      mint: "#08120e",
      rose: "#12070d",
      graphite: "#090a0c",
      liquid: "#08090c"
    };
    meta.setAttribute("content", darkColors[document.body.dataset.theme] || darkColors.default);
    return;
  }
  const colors = {
    default: "#f4f5f7",
    campus: "#f2f6ff",
    sky: "#edf7ff",
    mint: "#edf9f1",
    rose: "#fff1f5",
    graphite: "#1f2633",
    liquid: "#f7f8fc"
  };
  meta.setAttribute("content", colors[document.body.dataset.theme] || colors.default);
}

function transitionRender() {
  render();
}

function scheduleRender() {
  if (renderFrame) return;
  renderFrame = window.requestAnimationFrame(() => {
    renderFrame = 0;
    render();
  });
}

function transitionTheme(update) {
  document.body.classList.add("liquid-theme-changing");
  const finish = () => {
    window.setTimeout(() => document.body.classList.remove("liquid-theme-changing"), 360);
  };
  update();
  finish();
}

function render() {
  const day = getActiveDay();

  renderDates();
  renderGroupOptions();
  renderProfileControls();
  renderViewButtons();
  renderFilterButtons();
  renderSummary(day);
  renderHeader(day);
  renderSaveButton();
  renderStudentPill();
  renderNow(day);
  renderTeacherDaySchedule();
  if (statsPanel?.hidden === false) renderStats();
  if (els.suggestions?.hidden === false) renderSearchSuggestions();

  const visible = getVisibleEntries(day);
  const hasResults = visible.some((entry) => !entry.isEmpty) || (state.group && !state.filters.has("filled") && visible.length);
  els.empty.hidden = hasResults;
  els.cards.hidden = state.view !== "cards" || !hasResults;
  els.table.hidden = state.view !== "table" || !hasResults;

  if (state.view === "cards") {
    renderCards(visible);
  } else {
    renderTable(day);
  }

  renderIcons();
}

function renderDates() {
  els.dateStrip.innerHTML = days.map((day) => {
    const date = parseDate(day.id);
    const weekday = date ? new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(date) : "";
    const isToday = day.id === todayId;
    return `
      <button class="date-btn ${day.id === state.dayId ? "is-active" : ""} ${isToday ? "is-today" : ""}" type="button" data-day="${escapeHTML(day.id)}">
        <span>${escapeHTML(day.label)}</span>
        <small>${escapeHTML(weekday || "расписание")}</small>
        ${isToday ? "<em>Сегодня</em>" : ""}
      </button>
    `;
  }).join("");

}

function renderGroupOptions() {
  const day = getActiveDay();
  const options = [`<option value="">Все группы</option>`].concat(
    day.groups.map((group) => `<option value="${escapeHTML(group)}">${escapeHTML(group)}</option>`)
  );
  els.group.innerHTML = options.join("");
  els.group.value = state.group;
}

function renderProfileControls() {
  if (!els.profileGroup || !els.profileName) return;

  const groups = getAllGroups();
  const selectedGroup = state.profile.group || "";
  const options = [`<option value="">Не выбрана</option>`].concat(
    groups.map((group) => `<option value="${escapeHTML(group)}">${escapeHTML(group)}</option>`)
  );

  els.profileGroup.innerHTML = options.join("");
  els.profileGroup.value = groups.includes(selectedGroup) ? selectedGroup : "";

  if (document.activeElement !== els.profileName) {
    els.profileName.value = state.profile.name || "";
  }

  if (els.profileClear) {
    els.profileClear.disabled = !state.profile.name && !state.profile.group;
  }

  renderProfilePreview();
}

function renderProfilePreview() {
  if (!els.profilePreview) return;
  const name = cleanText(els.profileName?.value || "");
  const group = els.profileGroup?.value || "";
  const hasProfile = Boolean(name || group);
  els.profilePreview.innerHTML = hasProfile
    ? `<strong>${escapeHTML(name || "Студент")}</strong><span>${escapeHTML(group || "группа не выбрана")}</span>`
    : `<strong>Вход необязателен</strong><span>Сохраните группу, и расписание будет открываться сразу по ней.</span>`;
}

function saveProfileFromControls() {
  const profile = {
    name: cleanText(els.profileName?.value || "").slice(0, 32),
    group: els.profileGroup?.value || ""
  };

  state.profile = profile;
  writeStorage("ipek-student-profile", JSON.stringify(profile));

  if (profile.group) {
    writeStorage("ipek-selected-group", profile.group);
    if (getActiveDay().groups.includes(profile.group)) {
      state.group = profile.group;
    }
  }

  transitionRender();
}

function clearProfile() {
  state.profile = { name: "", group: "" };
  removeStorage("ipek-student-profile");
  renderProfileControls();
  transitionRender();
}

function renderStudentPill() {
  if (!els.student) return;
  const name = state.profile.name || "Гость";
  const group = state.profile.group || state.group || "группа не выбрана";
  els.student.innerHTML = `
    <span class="icon" data-icon="user" aria-hidden="true"></span>
    <span>${escapeHTML(name)} · ${escapeHTML(group)}</span>
  `;
}

function renderSearchSuggestions() {
  if (!els.suggestions) return;
  const query = normalizeSearch(els.search.value);
  const groups = getActiveDay().groups.map((group) => ({ value: group, type: "group" }));
  const pool = getActiveDay().entries.filter((entry) => !entry.isEmpty);
  const categories = [
    { title: "Группы", type: "group", items: groups },
    { title: "Преподаватели", type: "teacher", items: rankedValues(pool, (entry) => entry.parsed.teacher) },
    { title: "Кабинеты", type: "room", items: rankedValues(pool, (entry) => entry.parsed.room) },
    { title: "Предметы", type: "subject", items: rankedValues(pool, (entry) => entry.parsed.subject) },
    { title: "Пары", type: "pair", items: rankedValues(pool, (entry) => entry.slot.pair) }
  ];

  const blocks = categories.map((category) => {
    const items = category.items
      .filter((item) => !query || normalizeSearch(item.value).includes(query))
      .slice(0, 6);
    if (!items.length) return "";
    return `
      <div class="suggestion-group">
        <span>${escapeHTML(category.title)}</span>
        <div>
          ${items.map((item) => suggestionButton(category.type, item.value)).join("")}
        </div>
      </div>
    `;
  }).filter(Boolean);

  if (!blocks.length) {
    els.suggestions.innerHTML = `
      <div class="suggestion-empty">Подсказок нет. Попробуйте часть фамилии, кабинет или номер группы.</div>
    `;
  } else {
    els.suggestions.innerHTML = blocks.join("");
  }

  setSearchSuggestionsOpen(true);
  renderIcons();
}

function suggestionButton(type, value) {
  const icon = type === "room" ? "map-pin" : type === "group" ? "user" : type === "pair" ? "clock-3" : "search";
  return `
    <button type="button" data-suggestion-type="${escapeAttribute(type)}" data-suggestion-value="${escapeAttribute(value)}">
      <span class="icon" data-icon="${icon}" aria-hidden="true"></span>
      <span>${escapeHTML(value)}</span>
    </button>
  `;
}

function applySearchSuggestion(button) {
  const type = button.dataset.suggestionType;
  const value = button.dataset.suggestionValue || "";
  if (!value) return;

  if (type === "group") {
    state.group = value;
    state.query = "";
    els.search.value = "";
  } else {
    state.query = value;
    els.search.value = value;
  }

  setSearchSuggestionsOpen(false);
  transitionRender();
}

function setSearchSuggestionsOpen(open) {
  if (!els.suggestions) return;
  els.suggestions.hidden = !open;
}

function closeSearchSuggestionsIfOutside(target) {
  if (!els.suggestions || els.suggestions.hidden) return;
  if (els.suggestions.contains(target) || els.search.contains(target)) return;
  setSearchSuggestionsOpen(false);
}

function renderStats() {
  if (!els.stats) return;
  const stats = buildStats();
  const teacher = hasTeacherStatsScope()
    ? getTeacherDirectory().find((profile) => profile.key === state.teacherKey)
    : null;
  const titleParts = [
    state.group ? `Группа ${state.group}` : "Все группы",
    teacher ? teacher.fullName || teacher.display : ""
  ].filter(Boolean);
  const title = titleParts.join(" · ");
  const topSubjects = stats.subjects.slice(0, 6).map((item) => statBar(item.name, item.count, stats.maxSubject)).join("");
  const dayLoad = stats.days.map((item) => statBar(item.label, item.count, stats.maxDay)).join("");
  const forecast = buildWeeklyForecast();

  els.stats.innerHTML = `
    <div class="stats-scope">
      <strong>${escapeHTML(title)}</strong>
      <span>${escapeHTML(String(stats.total))} занятий в загруженном расписании</span>
    </div>
    <div class="stats-block">
      <span class="settings-label">Чаще всего встречаются</span>
      ${topSubjects || '<div class="suggestion-empty">Нет занятий для анализа.</div>'}
    </div>
    <div class="stats-block">
      <span class="settings-label">Нагрузка по дням</span>
      ${dayLoad || '<div class="suggestion-empty">Нет дат для анализа.</div>'}
    </div>
    <div class="stats-block">
      <span class="settings-label">Пример недели по статистике</span>
      ${forecast.length ? forecast.map(forecastRow).join("") : '<div class="suggestion-empty">Пока мало данных для прогноза.</div>'}
    </div>
  `;
}

function forecastRow(item) {
  return `
    <div class="forecast-row">
      <strong>${escapeHTML(item.weekday)}</strong>
      <span>${escapeHTML(item.subjects.join(", "))}</span>
      <small>${escapeHTML(String(item.count))} занятий в выборке</small>
    </div>
  `;
}

function statBar(label, value, max) {
  const width = max > 0 ? Math.max(8, Math.round((value / max) * 100)) : 0;
  return `
    <div class="stat-row">
      <div>
        <strong>${escapeHTML(label)}</strong>
        <span>${escapeHTML(String(value))}</span>
      </div>
      <i style="--bar-width: ${width}%"></i>
    </div>
  `;
}

function renderTeachers() {
  if (!els.teachersGrid) return;

  const query = normalizeSearch(els.teacherSearch?.value || "");
  const teachers = getTeacherDirectory().filter((profile) => !query || profile.search.includes(query));

  if (!teachers.length) {
    els.teachersGrid.innerHTML = `
      <div class="teacher-empty">
        <strong>Преподаватель не найден</strong>
        <span>Попробуйте фамилию, предмет или направление из расписания.</span>
      </div>
    `;
    return;
  }

  els.teachersGrid.innerHTML = teachers.map(teacherCard).join("");
  renderIcons();
}

function renderTeacherDayControls() {
  if (!els.teacherDaySelect) return;
  const teachers = getTeacherDirectory().filter((profile) => profile.lessonCount || profile.official);
  const hasSavedTeacher = teachers.some((profile) => profile.key === state.teacherKey);

  if (!hasSavedTeacher) {
    const firstWithSchedule = teachers.find((profile) => profile.lessonCount);
    state.teacherKey = firstWithSchedule?.key || teachers[0]?.key || "";
  }

  els.teacherDaySelect.innerHTML = teachers.map((profile) => `
    <option value="${escapeAttribute(profile.key)}">${escapeHTML(profile.fullName || profile.display)}</option>
  `).join("");
  els.teacherDaySelect.value = state.teacherKey;
}

function renderTeacherDaySchedule() {
  if (!els.teacherDayContent) return;
  if (els.teacherDaySelect && els.teacherDaySelect.value !== state.teacherKey) {
    els.teacherDaySelect.value = state.teacherKey;
  }

  const profile = getTeacherDirectory().find((item) => item.key === state.teacherKey);
  if (!profile) {
    els.teacherDayContent.innerHTML = `
      <div class="teacher-day-empty">
        <strong>Выберите преподавателя</strong>
        <span>После выбора здесь появятся пары, группы и кабинеты.</span>
      </div>
    `;
    return;
  }

  const { day, label } = getTeacherScheduleDay(profile);
  const entries = day.entries
    .filter((entry) => !entry.isEmpty && entryHasTeacherKey(entry, profile.key))
    .sort((a, b) => a.slot.order - b.slot.order || a.group.localeCompare(b.group, "ru"));

  const rows = entries.map((entry) => {
    const room = entry.flags.online
      ? `<span class="teacher-day-online">Дистанционно</span>`
      : entry.parsed.room
        ? `<span>${escapeHTML(formatRoom(entry.parsed.room))}</span>`
        : `<span>кабинет не указан</span>`;
    return `
      <article class="teacher-day-row">
        <div>
          <strong>${escapeHTML(entry.slot.pair)}</strong>
          <span>${escapeHTML(entry.slot.timeLabel)}</span>
        </div>
        <div>
          <strong>${escapeHTML(entry.parsed.subject || "Занятие")}</strong>
          <span>${escapeHTML(entry.group)}</span>
        </div>
        <div>
          <span class="icon" data-icon="${entry.flags.online ? "monitor" : "map-pin"}" aria-hidden="true"></span>
          ${room}
        </div>
      </article>
    `;
  }).join("");

  els.teacherDayContent.innerHTML = `
    <div class="teacher-day-summary">
      <strong>${escapeHTML(profile.fullName || profile.display)}</strong>
      <span>${escapeHTML(label)} · ${escapeHTML(day.label)}</span>
    </div>
    ${rows || `
      <div class="teacher-day-empty">
        <strong>Пар не найдено</strong>
        <span>В загруженных днях для этого преподавателя нет занятий.</span>
      </div>
    `}
  `;
  renderIcons();
}

function teacherCard(profile) {
  const officialAreas = profile.officialAreas.length ? profile.officialAreas : [];
  const scheduleAreas = topScheduleSubjects(profile, 3);
  const allTags = uniqueTeacherAreas(officialAreas.concat(scheduleAreas), 5);
  const tags = allTags.slice(0, 3);
  const more = allTags.length - tags.length;
  const sourceLabel = profile.official ? "Сведения + расписание" : "По расписанию";

  return `
    <article class="teacher-card" id="teacher-${escapeAttribute(teacherSlug(profile.key))}">
      <header>
        <span class="teacher-avatar">${escapeHTML((profile.fullName || profile.display).slice(0, 1))}</span>
        <div>
          <span class="news-label">${escapeHTML(sourceLabel)}</span>
          <h3>${escapeHTML(profile.fullName || profile.display)}</h3>
          <p>${escapeHTML([profile.role, profile.category].filter(Boolean).join(" • "))}</p>
        </div>
      </header>
      <div class="teacher-tags">
        ${tags.map((item) => `<span>${escapeHTML(item)}</span>`).join("")}
        ${more > 0 ? `<span>+${escapeHTML(String(more))}</span>` : ""}
      </div>
      <p class="teacher-note">${escapeHTML(teacherScheduleNote(profile))}</p>
    </article>
  `;
}

function teacherScheduleNote(profile) {
  if (!profile.lessonCount) return "Сведений в загруженном расписании пока нет.";
  const groupCount = profile.groups.size;
  return `${profile.lessonCount} ${pluralRu(profile.lessonCount, ["занятие", "занятия", "занятий"])} · ${groupCount} ${pluralRu(groupCount, ["группа", "группы", "групп"])}.`;
}

function getTeacherDirectory() {
  if (teacherDirectoryCache) return teacherDirectoryCache;

  const profiles = new Map();
  days.forEach((day) => {
    day.entries.forEach((entry) => {
      if (entry.isEmpty || !entry.parsed.teacher) return;
      splitTeacherNames(entry.parsed.teacher).forEach((name) => {
        const key = teacherKey(name, entry.parsed.subject);
        if (!key || key === "Практика") return;
        const profile = ensureTeacherProfile(profiles, key);
        profile.lessonCount += 1;
        profile.groups.add(entry.group);
        if (entry.parsed.subject) {
          profile.subjectCounts.set(entry.parsed.subject, (profile.subjectCounts.get(entry.parsed.subject) || 0) + 1);
        }
      });
    });
  });

  Object.keys(OFFICIAL_TEACHER_PROFILES).forEach((key) => ensureTeacherProfile(profiles, key));

  teacherDirectoryCache = Array.from(profiles.values())
    .map((profile) => ({
      ...profile,
      search: normalizeSearch([
        profile.key,
        profile.display,
        profile.fullName,
        profile.role,
        profile.category,
        profile.officialAreas.join(" "),
        topScheduleSubjects(profile, 8).join(" "),
        Array.from(profile.groups).join(" ")
      ].join(" "))
    }))
    .sort((a, b) => {
      if (a.official !== b.official) return Number(b.official) - Number(a.official);
      return b.lessonCount - a.lessonCount || (a.fullName || a.display).localeCompare(b.fullName || b.display, "ru");
    });

  return teacherDirectoryCache;
}

function ensureTeacherProfile(map, key) {
  if (map.has(key)) return map.get(key);
  const official = OFFICIAL_TEACHER_PROFILES[key] || {};
  const profile = {
    key,
    display: key,
    fullName: official.fullName || "",
    role: official.role || "преподаватель",
    category: official.category || "",
    official: Boolean(official.fullName),
    officialAreas: official.areas || [],
    subjectCounts: new Map(),
    groups: new Set(),
    lessonCount: 0
  };
  map.set(key, profile);
  return profile;
}

function getTeacherProfiles(teacher, subject = "") {
  const directory = getTeacherDirectory();
  const byKey = new Map(directory.map((profile) => [profile.key, profile]));
  return splitTeacherNames(teacher)
    .map((name) => byKey.get(teacherKey(name, subject)))
    .filter(Boolean);
}

function entryHasTeacherKey(entry, key) {
  return splitTeacherNames(entry.parsed.teacher).some((name) => teacherKey(name, entry.parsed.subject) === key);
}

function getTeacherScheduleDay(profile) {
  const candidates = days.filter((day) => day.entries.some((entry) => !entry.isEmpty && entryHasTeacherKey(entry, profile.key)));
  const today = candidates.find((day) => day.id === todayId);
  if (today) return { day: today, label: "Сегодня" };

  const next = candidates.find((day) => day.id > todayId);
  if (next) return { day: next, label: "Ближайший день" };

  const fallback = candidates[candidates.length - 1] || getActiveDay();
  return { day: fallback, label: "Последний день в данных" };
}

function splitTeacherNames(teacher) {
  return cleanText(teacher)
    .replace(/\([^)]*\)/g, "")
    .replace(/\bc\s*\d+[\d.: -]*/ig, "")
    .split(/\s*\/\s*|,\s*/)
    .map((item) => cleanText(item.replace(/^[—-]+|[—-]+$/g, "")))
    .filter(Boolean);
}

function teacherKey(name, subject = "") {
  const text = cleanText(name).replace(/[^\p{L}.\s-]+/gu, " ").replace(/\s+/g, " ").trim();
  const match = text.match(/^([А-ЯЁ][а-яё-]+)(?:\s+([А-ЯЁ])\.?\s*([А-ЯЁ])\.?)?/);
  if (!match) return "";

  const surname = match[1];
  const initials = match[2] && match[3] ? `${match[2]}.${match[3]}.` : "";
  if (initials) return `${surname} ${initials}`;

  return inferTeacherKeyBySubject(surname, subject);
}

function inferTeacherKeyBySubject(surname, subject) {
  const area = normalizeTeacherArea(subject);
  const search = normalizeSearch(`${area} ${subject}`);

  if (surname === "Кузнецова") {
    if (/(информ|технолог|тризбд|гдим|комп|ис|бд|осн ит)/i.test(search)) return "Кузнецова О.В.";
    if (/(хим|биолог|материаловед|черчен)/i.test(search)) return "Кузнецова А.М.";
  }

  if (surname === "Ефремова" && /(истор|обществ)/i.test(search)) {
    return "Ефремова И.Ю.";
  }

  if (surname === "Чермных" && /(ин язык|иностран|немец|нем язык|англий)/i.test(search)) {
    return "Чермных С.В.";
  }

  return surname;
}

function topTeacherAreas(profile, limit = 3) {
  const areas = profile.officialAreas.length ? profile.officialAreas : topScheduleSubjects(profile, limit);
  return uniqueTeacherAreas(areas, limit);
}

function topScheduleSubjects(profile, limit = 3) {
  const counts = new Map();
  profile.subjectCounts.forEach((count, name) => {
    const area = normalizeTeacherArea(name);
    if (!area) return;
    counts.set(area, (counts.get(area) || 0) + count);
  });

  return Array.from(counts, ([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "ru"))
    .slice(0, limit)
    .map((item) => item.name);
}

function uniqueTeacherAreas(values, limit = 5) {
  const result = [];
  const seen = new Set();

  values.forEach((value) => {
    const area = normalizeTeacherArea(value);
    if (!area) return;
    const key = normalizeSearch(area);
    if (seen.has(key)) return;
    seen.add(key);
    result.push(area);
  });

  return result.slice(0, limit);
}

function normalizeTeacherArea(value) {
  let area = cleanText(value)
    .replace(/\b\d{1,2}[.:]\d{2}\s*[-–]\s*\d{1,2}[.:]\d{2}\b/g, " ")
    .replace(/\b\d{1,2}[.:]\d{2}\b/g, " ")
    .replace(/\bкаб\.?\s*\d+[а-я]?\b/ig, " ")
    .replace(/\b\d{2,4}[а-я]?\b/ig, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.,;:]+$/g, "");
  if (!area) return "";

  const search = normalizeSearch(area);
  if (/^англ|^ин яз|англий/.test(search)) return "английский язык";
  if (/^нем|немец/.test(search)) return "немецкий язык";
  if (/^рус|русский/.test(search)) return "русский язык";
  if (/^литер|литература/.test(search)) return "литература";
  if (/^матем|алгеб|геометр/.test(search)) return "математика";
  if (/^физкультур|физкультура/.test(search)) return "физическая культура";
  if (/^обществ/.test(search)) return "обществознание";
  if (/^истор/.test(search)) return "история";
  if (/^информ/.test(search)) return "информатика";
  if (/^осн ит|информационн/.test(search)) return "информационные технологии";
  if (/^хим/.test(search)) return "химия";
  if (/^обзр|^бж$/.test(search)) return "ОБЗР";
  if (/^гдим$/.test(search)) return "ГДиМ";
  if (/^ок проф/.test(search)) return "ОК проф";
  if (/^тризбд$/.test(search)) return "ТРиЗБД";
  if (/^арх ас$/.test(search)) return "Арх АС";
  if (/^туд$|технология учебной деятельности/.test(search)) return "технология учебной деятельности";
  return area.slice(0, 1).toLowerCase() + area.slice(1);
}

function teacherSlug(key) {
  return key.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-");
}

function renderHeader(day) {
  els.activeDayLabel.textContent = day.titleText || day.label;
  const groupLabel = state.group ? `для группы ${state.group}` : "по всем группам";
  els.activeTitle.textContent = `Расписание ${groupLabel}`;
}

function renderViewButtons() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    const isActive = button.dataset.view === state.view;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderFilterButtons() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", state.filters.has(button.dataset.filter));
  });
}

function renderSummary(day) {
  const groupEntries = getEntriesForCurrentGroup(day).filter((entry) => !entry.isEmpty);
  const visible = getVisibleEntries(day).filter((entry) => !entry.isEmpty);
  const practice = groupEntries.filter((entry) => entry.flags.practice).length;
  const exams = groupEntries.filter((entry) => entry.flags.exam).length;
  const online = groupEntries.filter((entry) => entry.flags.online).length;

  els.summary.innerHTML = [
    summaryItem(visible.length, "занятий найдено"),
    summaryItem(day.groups.length, "групп в расписании"),
    summaryItem(practice, "практик по выборке"),
    summaryItem(exams + online, "экзаменов и дистанционных пар")
  ].join("");
}

function summaryItem(value, label) {
  return `<div class="summary-item"><strong>${escapeHTML(String(value))}</strong><span>${escapeHTML(label)}</span></div>`;
}

function renderCards(entries) {
  const cards = entries.filter((entry) => {
    if (!state.group && entry.isEmpty) return false;
    return true;
  });

  els.cards.innerHTML = cards.map((entry) => {
    if (entry.isEmpty) return emptyLessonCard(entry);

    const tags = [
      entry.flags.practice ? tag("Практика", "practice") : "",
      entry.flags.exam ? tag("Экзамен/зачет", "exam") : "",
      entry.flags.online ? tag("Дистанционно", "online") : "",
      shouldShowFutureCode(entry) ? futureCodeLink() : ""
    ].join("");

    return `
      <article class="lesson-card ${entry.isNow ? "is-now" : ""}">
        <div class="lesson-time">
          <span class="pair">${escapeHTML(entry.slot.pair)}</span>
          <span class="time">${escapeHTML(entry.slot.timeLabel)}</span>
        </div>
        <div class="lesson-main">
          <h3>${escapeHTML(entry.parsed.subject)}</h3>
          <div class="lesson-meta">
            ${entry.parsed.teacher ? meta("user", entry.parsed.teacher) : ""}
            ${entry.parsed.room && !entry.flags.online ? meta("map-pin", formatRoom(entry.parsed.room)) : ""}
            ${entry.parsed.note ? meta("badge-check", entry.parsed.note) : ""}
            ${tags}
          </div>
          ${entry.parsed.teacher ? teacherBrief(entry.parsed.teacher, entry.parsed.subject) : ""}
        </div>
        <span class="group-badge">${escapeHTML(entry.group)}</span>
      </article>
    `;
  }).join("");
}

function emptyLessonCard(entry) {
  return `
    <article class="lesson-card">
      <div class="lesson-time">
        <span class="pair">${escapeHTML(entry.slot.pair)}</span>
        <span class="time">${escapeHTML(entry.slot.timeLabel)}</span>
      </div>
      <div class="lesson-main">
        <h3>Окно</h3>
        <div class="lesson-meta">${meta("clock-3", "Занятий нет")}</div>
      </div>
      <span class="group-badge">${escapeHTML(entry.group)}</span>
    </article>
  `;
}

function meta(iconName, text) {
  return `<span class="meta-token"><span class="icon" data-icon="${iconName}" aria-hidden="true"></span>${escapeHTML(text)}</span>`;
}

function tag(text, type) {
  return `<span class="tag ${type}">${escapeHTML(text)}</span>`;
}

function teacherBrief(teacher, subject = "", extraClass = "") {
  const profiles = getTeacherProfiles(teacher, subject).slice(0, 2);
  if (!profiles.length) return "";

  return `
    <div class="teacher-brief ${escapeAttribute(extraClass)}">
      ${profiles.map((profile) => {
        const areas = topTeacherAreas(profile, 2).join(", ");
        return `
          <a href="#teacher-${escapeAttribute(teacherSlug(profile.key))}">
            <strong>${escapeHTML(profile.fullName || profile.display)}</strong>
            <span>${escapeHTML([profile.role, areas].filter(Boolean).join(" • "))}</span>
          </a>
        `;
      }).join("")}
    </div>
  `;
}

function futureCodeLink(extraClass = "") {
  return `
    <a class="lesson-link future-code-link ${escapeAttribute(extraClass)}" href="${escapeAttribute(FUTURE_CODE_URL)}" target="_blank" rel="noreferrer">
      <span class="icon" data-icon="link" aria-hidden="true"></span>
      <span>Код будущего</span>
    </a>
  `;
}

function shouldShowFutureCode(entry) {
  return isFirstCourseGroup(entry.group) && /информатик/i.test(entry.text);
}

function isFirstCourseGroup(group) {
  return /-25(?:-|$)/.test(group);
}

function tableCellContent(entry) {
  const details = [
    entry.parsed.teacher ? meta("user", entry.parsed.teacher) : "",
    entry.parsed.room && !entry.flags.online ? meta("map-pin", formatRoom(entry.parsed.room)) : "",
    entry.parsed.note ? meta("badge-check", entry.parsed.note) : "",
    entry.flags.practice ? tag("Практика", "practice") : "",
    entry.flags.exam ? tag("Экзамен/зачет", "exam") : "",
    entry.flags.online ? tag("Дистанционно", "online") : "",
    shouldShowFutureCode(entry) ? futureCodeLink("table-link") : ""
  ].join("");

  return `
    <div class="table-cell-content ${entry.isNow ? "is-now" : ""}">
      <strong class="table-lesson-title">${escapeHTML(entry.parsed.subject)}</strong>
      ${details ? `<div class="table-cell-meta">${details}</div>` : ""}
      ${entry.parsed.teacher ? teacherBrief(entry.parsed.teacher, entry.parsed.subject, "table-teacher-brief") : ""}
    </div>
  `;
}

function renderTable(day) {
  const groupFilter = state.group;
  const query = normalizeSearch(state.query);
  const activeSpecialFilters = ["practice", "exam", "online"].filter((filter) => state.filters.has(filter));

  els.table.innerHTML = day.rawTables.map((table, tableIndex) => {
    const header = table[0] || [];
    const groups = header.slice(1);
    const visibleIndexes = groups
      .map((group, index) => ({ group, index: index + 1 }))
      .filter((item) => !groupFilter || item.group === groupFilter);

    const head = visibleIndexes
      .map((item) => `<th scope="col">${escapeHTML(item.group)}</th>`)
      .join("");

    const rows = table.slice(1).map((row) => {
      const slot = parseSlot(row[0] || "");
      let filledCount = 0;
      const cells = visibleIndexes.map((item) => {
        const text = cleanText(row[item.index] || "");
        const parsed = parseLesson(text);
        const entry = makeEntry(day, item.group, slot, text, parsed);
        const matches = !text ? !state.filters.has("filled") : passesSearchAndSpecial(entry, query, activeSpecialFilters);
        if (matches && text) filledCount += 1;
        const content = matches && text
          ? tableCellContent(entry)
          : `<span class="muted-cell">-</span>`;
        return `<td>${content}</td>`;
      }).join("");

      const hasVisible = filledCount > 0 || (!state.filters.has("filled") && groupFilter);
      if (!hasVisible) return "";
      return `
        <tr>
          <td class="table-time-cell">
            <strong>${escapeHTML(slot.pair)}</strong>
            <span>${escapeHTML(slot.timeLabel)}</span>
          </td>
          ${cells}
        </tr>
      `;
    }).join("");

    if (!rows.trim()) return "";
    return `
      <table class="schedule-table">
        <caption>${escapeHTML(day.label)} · блок ${tableIndex + 1}</caption>
        <thead><tr><th scope="col">Пара</th>${head}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }).join("");
}

function cellLines(text) {
  return `<span class="cell-lines">${linesOf(text).map((line) => {
    if (/дистанц/i.test(line)) {
      const withoutOnline = cleanText(line.replace(/дистанционно/ig, ""));
      return [
        withoutOnline ? `<span>${escapeHTML(withoutOnline)}</span>` : "",
        `<span class="cell-online">Дистанционно</span>`
      ].join("");
    }
    return `<span>${escapeHTML(line)}</span>`;
  }).join("")}</span>`;
}

function renderSaveButton() {
  const saved = readStorage("ipek-selected-group");
  const hasGroup = Boolean(state.group);
  const isSaved = hasGroup && saved === state.group;
  els.saveGroup.disabled = !hasGroup;
  els.saveGroup.classList.toggle("is-saved", isSaved);
  els.saveGroup.innerHTML = `
    <span class="icon" data-icon="star" aria-hidden="true"></span>
    <span>${isSaved ? "Сохранено" : "Моя группа"}</span>
  `;
}

function renderNow(day) {
  const now = new Date();
  const isSelectedToday = day.id === toISODate(now);
  const pool = getEntriesForCurrentGroup(day).filter((entry) => !entry.isEmpty);

  if (!isSelectedToday) {
    els.now.innerHTML = `
      <strong>${escapeHTML(day.label)}</strong>
      <span>Выбрана не сегодняшняя дата. Для текущего дня нажмите кнопку ${escapeHTML(todayButtonLabel())}.</span>
    `;
    return;
  }

  const minutes = now.getHours() * 60 + now.getMinutes();
  const withTime = pool
    .map((entry) => ({
      ...entry,
      startMinutes: timeToMinutes(entry.slot.start),
      endMinutes: timeToMinutes(entry.slot.end)
    }))
    .filter((entry) => Number.isFinite(entry.startMinutes) && Number.isFinite(entry.endMinutes));

  const current = withTime.find((entry) => minutes >= entry.startMinutes && minutes <= entry.endMinutes);
  if (current) {
    els.now.innerHTML = `
      <strong>Идёт ${escapeHTML(current.slot.pair)}</strong>
      <span>${escapeHTML(formatNowDetails(current))}</span>
    `;
    return;
  }

  const next = withTime.find((entry) => minutes < entry.startMinutes);
  if (next) {
    els.now.innerHTML = `
      <strong>Следующая: ${escapeHTML(next.slot.pair)}</strong>
      <span>${escapeHTML(formatNowDetails(next))}</span>
    `;
    return;
  }

  els.now.innerHTML = `
    <strong>Пары на сегодня закончились</strong>
    <span>Проверьте выбранную дату или расписание звонков.</span>
  `;
}

function formatNowDetails(entry) {
  return [
    entry.slot.timeLabel,
    entry.group,
    entry.parsed.subject,
    formatRoom(entry.parsed.room)
  ].filter(Boolean).join(" · ");
}

function formatRoom(room) {
  if (!room) return "";
  if (/дистанц/i.test(room)) return "";
  return /\d/.test(room) ? `каб. ${room}` : room;
}

function todayButtonLabel() {
  const today = days.find((day) => day.id === todayId);
  return today ? today.label : "сегодня";
}

function renderBells() {
  els.bells.innerHTML = BELLS[state.bells].map(([pair, time]) => `
    <div class="bell-row">
      <strong>${escapeHTML(pair)}</strong>
      <span>${escapeHTML(time)}</span>
    </div>
  `).join("");

  document.querySelectorAll("[data-bells]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.bells === state.bells);
  });

  renderIcons();
}

function getVisibleEntries(day) {
  const query = normalizeSearch(state.query);
  const activeSpecialFilters = ["practice", "exam", "online"].filter((filter) => state.filters.has(filter));
  const entries = getEntriesForCurrentGroup(day);

  return entries.filter((entry) => {
    if (entry.isEmpty) {
      return Boolean(state.group) && !state.filters.has("filled") && !query && !activeSpecialFilters.length;
    }
    return passesSearchAndSpecial(entry, query, activeSpecialFilters);
  });
}

function getEntriesForCurrentGroup(day) {
  const entries = state.group ? day.entries.filter((entry) => entry.group === state.group) : day.entries.filter((entry) => !entry.isEmpty);
  return entries
    .map((entry) => ({ ...entry, isNow: isEntryNow(entry) }))
    .sort((a, b) => a.slot.order - b.slot.order || a.group.localeCompare(b.group, "ru"));
}

function buildStats() {
  const subjectCounts = new Map();
  const dayStats = days.map((day) => {
    const entries = day.entries.filter(entryInStatsScope);

    entries.forEach((entry) => {
      const subject = normalizeSubject(entry.parsed.subject);
      if (!subject) return;
      subjectCounts.set(subject, (subjectCounts.get(subject) || 0) + 1);
    });

    return { label: day.label, count: entries.length };
  });

  const subjects = Array.from(subjectCounts, ([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "ru"));

  return {
    subjects,
    days: dayStats,
    total: dayStats.reduce((sum, item) => sum + item.count, 0),
    maxSubject: subjects[0]?.count || 0,
    maxDay: Math.max(0, ...dayStats.map((item) => item.count))
  };
}

function buildWeeklyForecast() {
  const byWeekday = new Map();

  days.forEach((day) => {
    const date = parseDate(day.id);
    if (!date) return;

    const entries = day.entries.filter(entryInStatsScope);
    if (!entries.length) return;

    const weekdayIndex = (date.getDay() + 6) % 7;
    const weekday = new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(date);
    const bucket = byWeekday.get(weekdayIndex) || {
      weekday: weekday.slice(0, 1).toUpperCase() + weekday.slice(1),
      count: 0,
      subjects: new Map()
    };

    entries.forEach((entry) => {
      const subject = normalizeSubject(entry.parsed.subject);
      if (!subject) return;
      bucket.count += 1;
      bucket.subjects.set(subject, (bucket.subjects.get(subject) || 0) + 1);
    });

    byWeekday.set(weekdayIndex, bucket);
  });

  return Array.from(byWeekday.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([, item]) => ({
      weekday: item.weekday,
      count: item.count,
      subjects: Array.from(item.subjects, ([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "ru"))
        .slice(0, 2)
        .map((subject) => subject.name)
    }));
}

function entryInStatsScope(entry) {
  if (entry.isEmpty) return false;
  if (state.group && entry.group !== state.group) return false;
  if (hasTeacherStatsScope() && !entryHasTeacherKey(entry, state.teacherKey)) return false;
  return true;
}

function hasTeacherStatsScope() {
  return Boolean(state.teacherKey && readStorage("ipek-teacher-key") === state.teacherKey);
}

function rankedValues(entries, pick) {
  const counts = new Map();
  entries.forEach((entry) => {
    const value = cleanText(pick(entry));
    if (!value) return;
    counts.set(value, (counts.get(value) || 0) + 1);
  });
  return Array.from(counts, ([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value, "ru", { numeric: true }));
}

function getAllGroups() {
  const groups = new Set();
  days.forEach((day) => day.groups.forEach((group) => groups.add(group)));
  return Array.from(groups).sort((a, b) => a.localeCompare(b, "ru", { numeric: true }));
}

function passesSearchAndSpecial(entry, query, activeSpecialFilters) {
  if (query && !entry.search.includes(query)) return false;
  if (activeSpecialFilters.length) {
    return activeSpecialFilters.some((filter) => entry.flags[filter]);
  }
  return true;
}

function normalizeDay(rawDay) {
  const rawTables = Array.isArray(rawDay.tables) ? rawDay.tables : [];
  const entries = [];
  const groupSet = new Set();

  rawTables.forEach((table) => {
    if (!Array.isArray(table) || !Array.isArray(table[0])) return;
    const groups = table[0].slice(1).map(cleanText);
    groups.forEach((group) => {
      if (group) groupSet.add(group);
    });

    table.slice(1).forEach((row) => {
      const slot = parseSlot(row[0] || "");
      groups.forEach((group, index) => {
        if (!group) return;
        const text = cleanText(row[index + 1] || "");
        entries.push(makeEntry(rawDay, group, slot, text, parseLesson(text)));
      });
    });
  });

  return {
    id: rawDay.id,
    label: rawDay.label || rawDay.id,
    titleText: rawDay.titleText || "",
    url: rawDay.url || "https://www.pilot-ipek.ru/schedule.html",
    rawTables,
    entries,
    groups: Array.from(groupSet).sort((a, b) => a.localeCompare(b, "ru", { numeric: true }))
  };
}

function prepareRawDays(rawInput) {
  const prepared = rawInput.map((day) => ({
    ...day,
    tables: Array.isArray(day.tables) ? [...day.tables] : []
  }));
  const april30 = prepared.find((day) => day.id === "2026-04-30");
  const may2 = prepared.find((day) => day.id === "2026-05-02");

  if (april30 && may2 && april30.urlPart === may2.urlPart) {
    const combinedTables = [...april30.tables, ...may2.tables];
    const aprilTables = [];
    const mayTables = [];

    combinedTables.forEach((table) => {
      if (isSaturdayScheduleTable(table)) {
        mayTables.push(table);
      } else {
        aprilTables.push(table);
      }
    });

    if (aprilTables.length && mayTables.length) {
      april30.tables = aprilTables;
      may2.tables = mayTables;
    }
  }

  return prepared;
}

function isSaturdayScheduleTable(table) {
  if (!Array.isArray(table)) return false;
  return table.slice(1).some((row) => {
    const slot = cleanText(Array.isArray(row) ? row[0] : "").replace(/\s+/g, " ");
    return (
      /^2 пара .*10[.:]05/i.test(slot) ||
      /^3 пара .*11[.:]55/i.test(slot) ||
      /^4 пара .*13[.:]30/i.test(slot) ||
      /^5 пара .*15[.:]05/i.test(slot) ||
      /^6 пара .*16[.:]40/i.test(slot)
    );
  });
}

function makeEntry(day, group, slot, text, parsed) {
  const flags = {
    practice: /практик/i.test(text),
    exam: /(экзам|зач[её]т|гиа|пересдач)/i.test(text),
    online: /дистанц/i.test(text)
  };

  return {
    dayId: day.id,
    group,
    slot,
    text,
    parsed,
    flags,
    isEmpty: !text,
    search: normalizeSearch([group, slot.pair, slot.timeLabel, text, parsed.subject, parsed.teacher, parsed.room].join(" "))
  };
}

function parseSlot(raw) {
  const lines = linesOf(raw);
  const pair = lines.find((line) => /пара/i.test(line)) || "Пара";
  const times = lines
    .filter((line) => /^\d{1,2}[.:]\d{2}$/.test(line))
    .map((line) => normalizeTime(line));
  return {
    pair,
    start: times[0] || "",
    end: times[1] || "",
    order: parseInt(pair, 10) || 99,
    timeLabel: times.length >= 2 ? `${displayTime(times[0])} - ${displayTime(times[1])}` : lines.slice(1).join(" ")
  };
}

function parseLesson(text) {
  const lines = linesOf(text);
  if (!lines.length) {
    return { subject: "Окно", teacher: "", room: "", note: "" };
  }

  const mutable = [...lines];
  let room = "";
  if (mutable.length > 1 && /дистанц/i.test(mutable[mutable.length - 1])) {
    const withoutOnline = cleanText(mutable[mutable.length - 1].replace(/дистанционно/ig, ""));
    if (withoutOnline) {
      mutable[mutable.length - 1] = withoutOnline;
    } else {
      mutable.pop();
    }
  }

  if (mutable.length > 1 && looksLikeRoom(mutable[mutable.length - 1])) {
    room = mutable.pop();
  }

  const noteLines = mutable.filter((line) => looksLikeNote(line));
  const core = mutable.filter((line) => !looksLikeNote(line));
  let teacher = "";
  let subjectLines = [...core];

  if (core.length > 1 && /\/$/.test(core[core.length - 2])) {
    teacher = `${core[core.length - 2]} ${core[core.length - 1]}`;
    subjectLines = core.slice(0, -2);
  } else if (core.length > 1 && looksLikeTeacher(core[core.length - 1])) {
    teacher = core[core.length - 1];
    subjectLines = core.slice(0, -1);
  }

  return {
    subject: subjectLines.join(" ") || lines[0],
    teacher,
    room,
    note: noteLines.join(" · ")
  };
}

function looksLikeRoom(line) {
  return /\d/.test(line) || /(спорт|тренаж|зал|библиот|дистанц)/i.test(line);
}

function looksLikeNote(line) {
  return /(экзам|зач[её]т|пересдач|разговоры)/i.test(line) || /^\d{1,2}[.:]\d{2}$/.test(line);
}

function looksLikeTeacher(line) {
  if (!line || looksLikeRoom(line) || looksLikeNote(line)) return false;
  return /^[А-ЯЁ][а-яё]+/.test(line) || /[А-ЯЁ]\.[А-ЯЁ]\./.test(line) || line.includes("/");
}

function cleanText(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function linesOf(value) {
  return cleanText(value)
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function normalizeTime(value) {
  const [hours, minutes] = value.replace(".", ":").split(":");
  return `${hours.padStart(2, "0")}:${minutes}`;
}

function displayTime(value) {
  return value.replace(/^0/, "");
}

function isEntryNow(entry) {
  const now = new Date();
  if (entry.dayId !== toISODate(now)) return false;
  const start = timeToMinutes(entry.slot.start);
  const end = timeToMinutes(entry.slot.end);
  if (!Number.isFinite(start) || !Number.isFinite(end)) return false;
  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes >= start && minutes <= end;
}

function timeToMinutes(value) {
  if (!value) return Number.NaN;
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function normalizeSearch(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeSubject(value) {
  return cleanText(value)
    .replace(/\s+/g, " ")
    .replace(/^основы\s+/i, "Осн ")
    .trim();
}

function pluralRu(value, forms) {
  const number = Math.abs(Number(value)) % 100;
  const last = number % 10;
  if (number > 10 && number < 20) return forms[2];
  if (last > 1 && last < 5) return forms[1];
  if (last === 1) return forms[0];
  return forms[2];
}

function getActiveDay() {
  return days.find((day) => day.id === state.dayId) || days[0];
}

function parseDate(value) {
  if (!value) return null;
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function compareDays(a, b) {
  const first = parseDate(a.id);
  const second = parseDate(b.id);
  const firstTime = first ? first.getTime() : Number.MAX_SAFE_INTEGER;
  const secondTime = second ? second.getTime() : Number.MAX_SAFE_INTEGER;
  return firstTime - secondTime;
}

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function chooseDefaultGroup(day, saved) {
  if (!day) return "";
  if (saved && day.groups.includes(saved)) return saved;
  return day.groups[0] || "";
}

function getPreferredGroup() {
  return state.profile.group || readStorage("ipek-selected-group") || "";
}

function renderIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    const name = node.getAttribute("data-icon");
    const path = ICONS[name];
    if (!path) return;
    node.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
  });
}

function renderDataError() {
  document.body.innerHTML = `
    <main class="workspace">
      <section class="empty-state">
        <strong>Данные расписания не загружены</strong>
        <span>Проверьте файл data.js рядом с index.html.</span>
      </section>
    </main>
  `;
}

function readStorage(key) {
  try {
    return localStorage.getItem(key) || "";
  } catch (error) {
    return "";
  }
}

function readProfile() {
  try {
    const parsed = JSON.parse(localStorage.getItem("ipek-student-profile") || "{}");
    return {
      name: cleanText(parsed.name || "").slice(0, 32),
      group: cleanText(parsed.group || "")
    };
  } catch (error) {
    return { name: "", group: "" };
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Local storage can be unavailable in private windows; the UI still works.
  }
}

function removeStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // Local storage can be unavailable in private windows; the UI still works.
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHTML(value).replace(/`/g, "&#96;");
}
