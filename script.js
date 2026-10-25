/* =========================================================
   Çok dilli portfolyo — TR / EN / AR
   ========================================================= */

const META = {
  tr: {
    title: "Mümin — Uygulama & Araç Geliştiricisi",
    desc: "Mümin'in kişisel sitesi. Android, masaüstü ve web uygulamaları; yapay zekâ, ağ ve harita araçları.",
  },
  en: {
    title: "Mümin — App & Tool Developer",
    desc: "Personal site of Mümin. Android, desktop and web apps; AI, networking and map-based tools.",
  },
  ar: {
    title: "مؤمن — مطوّر تطبيقات وأدوات",
    desc: "الموقع الشخصي لمؤمن. تطبيقات أندرويد وسطح مكتب وويب؛ ذكاء اصطناعي وشبكات وأدوات خرائط.",
  },
};

const DICT = {
  /* ---------------- TÜRKÇE ---------------- */
  tr: {
    "nav.about": "Hakkımda",
    "nav.projects": "Projeler",
    "nav.skills": "Yetenekler",
    "nav.contact": "İletişim",
    "ui.theme": "Tema değiştir",
    "ui.langGroup": "Dil seçimi",
    "ui.menu": "Menüyü aç / kapat",
    "ui.toTop": "Yukarı çık",
    "ui.scroll": "Aşağı kaydır",
    "ui.scrollText": "Aşağı kaydır",

    "hero.eyebrow": "Merhaba, ben",
    "hero.lead":
      'Uygulama ve araç geliştiricisiyim. <strong>Android</strong>, <strong>masaüstü</strong> ve <strong>web</strong> tarafında; yapay zekâ, ağ iletişimi ve harita tabanlı iş araçları yapıyorum.',
    "hero.cta1": "Projelerimi gör",
    "hero.cta2": "İletişime geç",

    "stat1.l": "Yayındaki proje", "stat1.v": "5",
    "stat2.l": "Platform",        "stat2.v": "4 ayrı",
    "stat3.l": "Odak",            "stat3.v": "Araçlar",

    "about.title": "Hakkımda",
    "about.p1":
      "Günlük işleri kolaylaştıran araçlar yapmayı seviyorum: LAN üzerinde dosya gönderen bir program, haritada ilan numarasını gösteren bir panel, bilgisayarı yöneten bir yapay zekâ asistanı… Hepsi aynı meraktan doğuyor.",
    "about.p2":
      "Bir sorunu çözerken önce neden bozulduğunu anlamaya çalışırım, sonra sonucu sade bir arayüze indirgerim. Kullanıcının teknik bilgisi olmasa bile işini bitirebilsin isterim.",

    "proj.title": "Projeler",

    "c1.tag": "Yapay Zekâ", "c1.sub": "AI Agent · Masaüstü",
    "c1.title": "Jarvis — Kişisel Yapay Zekâ Asistanı",
    "c1.desc":
      "Kendi yazdığım, ajan gibi çalışan kişisel asistan. Bilgisayara erişimi var; verdiğin işi kendi adımlarını planlayarak tamamlar.",
    "c1.f1": "Bilgisayara erişip gerçek işleri yapan ajan mimarisi",
    "c1.f2": "Adımları kendi planlar, araçları kullanır, sonucu raporlar",
    "c1.f3": "Sohbetle komut ver, geri kalanını o halleder",
    "c1.p1": "Otomasyon",

    "c2.tag": "Yapay Zekâ + Donanım",
    "c2.title": "ESP32 ile Duvar Arkası Görme ve Konum Tahmini",
    "c2.desc":
      "ESP32 üzerine kurulu yapay zekâ projesi. Duvarın arkasındaki kişiyi tespit edip yerini tahmin ediyor.",
    "c2.f1": "Donanım üzerinde çalışan hafif model (edge AI)",
    "c2.f2": "Duvar arkasındaki kişiyi tespit eder",
    "c2.f3": "Tespit edilen kişinin konumunu tahmin eder",
    "c2.p1": "Görsel işleme",

    "c3.tag": "Masaüstü", "c3.sub": "Windows · Yerel ağ",
    "c3.title": "Kerkük Üniversitesi — LAN Haberleşme & Dosya Aktarımı",
    "c3.desc":
      "Kurum içindeki çalışanların aynı yerel ağ üzerinden birbirine mesaj yazabildiği ve dosya gönderebildiği masaüstü uygulaması.",
    "c3.f1": "Ağdaki kullanıcıları otomatik bulma ve mesajlaşma",
    "c3.f2": "Büyük dosyaları yerel ağ üzerinden hızla gönderme",
    "c3.f3": "İnternet çıkışı ve sunucu kurulumu gerektirmez",

    "c4.tag": "Web", "c4.sub": "Harita · PHP · MySQL",
    "c4.title": "Emlak Haritası — Parsel & İlan Numaraları",
    "c4.desc":
      "Emlakçılar için harita üzerinde ilan ve parsel numaralarını görmeyi sağlayan web uygulaması.",
    "c4.f1": "Harita üzerinde numaralı işaretçiler ve tıklanabilir detay",
    "c4.f2": "Bölge, numara ve özelliğe göre arama ve filtreleme",
    "c4.f3": "Veritabanından yönetilen ilan kayıtları",

    "c5.tag": "Android",
    "c5.title": "AA Fix — Xiaomi Android Auto Sorun Giderici",
    "c5.desc":
      "MIUI/HyperOS telefonlarda Android Auto çökmesi ve bağlanamaması sorunlarını tespit eden, kullanıcıyı doğru ayara yönlendiren uygulama.",
    "c5.f1": "Teşhis sihirbazı: 8+ kontrol, tek dokunuşla ayar ekranı",
    "c5.f2": "Adım adım çözüm rehberi ve ADB komut listesi",
    "c5.f3": "Rootsuz, izin sadık, tamamen Türkçe",

    "skills.title": "Yetenekler",
    "s1": "Yapay zekâ ajanları / otomasyon",
    "s2": "Socket / yerel ağ iletişimi",
    "s3": "Kotlin / Android SDK",
    "s4": "Node.js / backend",
    "s5": "PHP · MySQL",
    "s6": "Leaflet · Google Maps API",
    "s7": "HTML · CSS · JavaScript",

    "contact.title": "İletişim",
    "contact.emailLabel": "E-posta",
    "contact.emailHint": "Tıkla, posta programın açılsın",
    "contact.phoneLabel": "Telefon",
    "contact.phoneHint": "Dokun ve ara",
    "contact.copy": "Kopyala",
    "contact.copied": "Kopyalandı ✓",
    "contact.note":
      "Bir fikrin, bir hatan ya da bir iş birliği mi var? Yukarıdaki adreslerden herhangi birine yazabilirsin.",
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "ui.theme": "Toggle theme",
    "ui.langGroup": "Choose language",
    "ui.menu": "Open / close menu",
    "ui.toTop": "Back to top",
    "ui.scroll": "Scroll down",
    "ui.scrollText": "Scroll down",

    "hero.eyebrow": "Hello, I'm",
    "hero.lead":
      'I build apps and tools. On <strong>Android</strong>, <strong>desktop</strong> and <strong>web</strong> — AI assistants, local-network communication and map-based business tools.',
    "hero.cta1": "See my projects",
    "hero.cta2": "Get in touch",

    "stat1.l": "Live projects", "stat1.v": "5",
    "stat2.l": "Platforms",     "stat2.v": "4",
    "stat3.l": "Focus",         "stat3.v": "Tools",

    "about.title": "About me",
    "about.p1":
      "I like building tools that make everyday work easier: a program that sends files over a LAN, a panel that shows property numbers on a map, an AI assistant that runs your computer… they all come from the same curiosity.",
    "about.p2":
      "When solving a problem I first try to understand why it broke, then I strip the result down to a simple interface. I want the user to finish the job even without technical knowledge.",

    "proj.title": "Projects",

    "c1.tag": "Artificial Intelligence", "c1.sub": "AI Agent · Desktop",
    "c1.title": "Jarvis — Personal AI Assistant",
    "c1.desc":
      "A personal assistant I wrote myself that works like an agent. It has access to your computer and completes the task you give it by planning its own steps.",
    "c1.f1": "Agent architecture that accesses the computer and gets real work done",
    "c1.f2": "Plans its own steps, uses tools and reports the result",
    "c1.f3": "Give it a command in chat, it handles the rest",
    "c1.p1": "Automation",

    "c2.tag": "AI + Hardware",
    "c2.title": "Seeing Behind Walls — Detection & Location Prediction with ESP32",
    "c2.desc":
      "An AI project built on the ESP32. It detects a person on the other side of a wall and predicts their location.",
    "c2.f1": "Lightweight model running on the hardware (edge AI)",
    "c2.f2": "Detects a person behind a wall",
    "c2.f3": "Predicts the location of the detected person",
    "c2.p1": "Image processing",

    "c3.tag": "Desktop", "c3.sub": "Windows · Local network",
    "c3.title": "Kirkuk University — LAN Messaging & File Transfer",
    "c3.desc":
      "A desktop app that lets staff on the same local network message each other and send files — with no internet required.",
    "c3.f1": "Automatically finds users on the network and chats with them",
    "c3.f2": "Sends large files quickly over the local network",
    "c3.f3": "No internet connection or server setup required",

    "c4.tag": "Web", "c4.sub": "Maps · PHP · MySQL",
    "c4.title": "Real Estate Map — Parcel & Listing Numbers",
    "c4.desc":
      "A web app that lets realtors see listing and parcel numbers on a map.",
    "c4.f1": "Numbered markers on the map with clickable details",
    "c4.f2": "Search and filter by area, number and property type",
    "c4.f3": "Listing records managed from a database",

    "c5.tag": "Android",
    "c5.title": "AA Fix — Xiaomi Android Auto Troubleshooter",
    "c5.desc":
      "Detects Android Auto crashes and connection failures on MIUI/HyperOS phones and points the user to the right setting.",
    "c5.f1": "Diagnostic wizard: 8+ checks, one tap to the settings screen",
    "c5.f2": "Step-by-step fix guide and ADB command list",
    "c5.f3": "No root, minimal permissions",

    "skills.title": "Skills",
    "s1": "AI agents / automation",
    "s2": "Socket / local network",
    "s3": "Kotlin / Android SDK",
    "s4": "Node.js / backend",
    "s5": "PHP · MySQL",
    "s6": "Leaflet · Google Maps API",
    "s7": "HTML · CSS · JavaScript",

    "contact.title": "Contact",
    "contact.emailLabel": "Email",
    "contact.emailHint": "Click to open your mail app",
    "contact.phoneLabel": "Phone",
    "contact.phoneHint": "Tap to call",
    "contact.copy": "Copy",
    "contact.copied": "Copied ✓",
    "contact.note":
      "Got an idea, a bug or a project in mind? Write to either of the addresses above.",
  },

  /* ---------------- العربية ---------------- */
  ar: {
    "nav.about": "نبذة عني",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.contact": "التواصل",
    "ui.theme": "تبديل المظهر",
    "ui.langGroup": "اختيار اللغة",
    "ui.menu": "فتح / إغلاق القائمة",
    "ui.toTop": "العودة إلى الأعلى",
    "ui.scroll": "مرّر إلى الأسفل",
    "ui.scrollText": "مرّر إلى الأسفل",

    "hero.eyebrow": "مرحبًا، أنا",
    "hero.lead":
      'أطوّر تطبيقات وأدوات. على مستوى <strong>أندرويد</strong> و<strong>سطح المكتب</strong> و<strong>الويب</strong> — مساعد ذكاء اصطناعي، واتصال بالشبكة المحلية، وأدوات خرائط للعمل.',
    "hero.cta1": "مشاريعي",
    "hero.cta2": "تواصل معي",

    "stat1.l": "مشاريع منشورة", "stat1.v": "5",
    "stat2.l": "المنصات",       "stat2.v": "4",
    "stat3.l": "التركيز",       "stat3.v": "الأدوات",

    "about.title": "نبذة عني",
    "about.p1":
      "أحب بناء الأدوات التي تبسّط العمل اليومي: برنامج لنقل الملفات عبر الشبكة المحلية، ولوحة تعرض أرقام العقارات على الخريطة، ومساعد ذكاء اصطناعي يدير حاسوبك… كلها وُلدت من الفضول نفسه.",
    "about.p2":
      "عند حل مشكلة أبحث أولًا عن سبب عطلها، ثم أبسّط النتيجة في واجهة سهلة. أريد أن ينجز المستخدم عمله حتى لو لم تكن لديه خبرة تقنية.",

    "proj.title": "المشاريع",

    "c1.tag": "ذكاء اصطناعي", "c1.sub": "وكيل ذكي · سطح المكتب",
    "c1.title": "Jarvis — مساعد شخصي بالذكاء الاصطناعي",
    "c1.desc":
      "مساعد شخصي كتبته بنفسي يعمل كوكيل. لديه صلاحية الوصول إلى الحاسوب وينجز المهمة التي تعطيه إياها بعد أن يخطّط خطواته بنفسه.",
    "c1.f1": "بنية وكيل يصل إلى الحاسوب وينجز أعمالًا حقيقية",
    "c1.f2": "يخطّط لخطواته ويستخدم الأدوات ويعرض النتيجة",
    "c1.f3": "أعطِه أمرًا في المحادثة وسيتكفّل بالباقي",
    "c1.p1": "أتمتة",

    "c2.tag": "ذكاء اصطناعي + عتاد",
    "c2.title": "الرؤية خلف الجدار — الكشف عن الأشخاص وتحديد موقعهم بـ ESP32",
    "c2.desc":
      "مشروع ذكاء اصطناعي مبني على ESP32. يكتشف الشخص خلف الجدار ويتنبأ بموقعه.",
    "c2.f1": "نموذج خفيف يعمل على العتاد (ذكاء اصطناعي طرفي)",
    "c2.f2": "يكشف الشخص الموجود خلف الجدار",
    "c2.f3": "يتنبأ بموقع الشخص المكتشف",
    "c2.p1": "معالجة الصور",

    "c3.tag": "سطح المكتب", "c3.sub": "ويندوز · شبكة محلية",
    "c3.title": "جامعة كركوك — مراسلة الشبكة المحلية ونقل الملفات",
    "c3.desc":
      "تطبيق سطح مكتب يتيح لموظفي المؤسسة الموجودين على الشبكة المحلية نفسها تبادل الرسائل والملفات دون الحاجة إلى الإنترنت.",
    "c3.f1": "يكتشف مستخدمي الشبكة تلقائيًا ويتيح المراسلة معهم",
    "c3.f2": "ينقل الملفات الكبيرة بسرعة عبر الشبكة المحلية",
    "c3.f3": "لا يحتاج اتصالًا بالإنترنت ولا إعداد خادم",

    "c4.tag": "ويب", "c4.sub": "خرائط · PHP · MySQL",
    "c4.title": "خريطة العقارات — أرقام القطع والإعلانات",
    "c4.desc":
      "تطبيق ويب يتيح لوسطاء العقارات رؤية أرقام الإعلانات والقطع على الخريطة.",
    "c4.f1": "علامات مرقّمة على الخريطة مع تفاصيل قابلة للنقر",
    "c4.f2": "بحث وتصفية حسب المنطقة والرقم ونوع العقار",
    "c4.f3": "سجلات الإعلانات تُدار من قاعدة البيانات",

    "c5.tag": "أندرويد",
    "c5.title": "AA Fix — أداة حل مشاكل Android Auto في شاومي",
    "c5.desc":
      "يكتشف أعطال Android Auto ومشاكل الاتصال في هواتف MIUI/HyperOS ويوجّه المستخدم إلى الإعداد الصحيح.",
    "c5.f1": "معالج تشخيص: أكثر من 8 فحوصات، ضغطة واحدة لشاشة الإعدادات",
    "c5.f2": "دليل إصلاح خطوة بخطوة وقائمة أوامر ADB",
    "c5.f3": "بدون روت وبأذونات محدودة",

    "skills.title": "المهارات",
    "s1": "وكلاء الذكاء الاصطناعي / الأتمتة",
    "s2": "Socket / الشبكة المحلية",
    "s3": "Kotlin / Android SDK",
    "s4": "Node.js / الخلفية",
    "s5": "PHP · MySQL",
    "s6": "Leaflet · Google Maps API",
    "s7": "HTML · CSS · JavaScript",

    "contact.title": "التواصل",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.emailHint": "اضغط لفتح تطبيق البريد",
    "contact.phoneLabel": "الهاتف",
    "contact.phoneHint": "اضغط للاتصال",
    "contact.copy": "نسخ",
    "contact.copied": "تم النسخ ✓",
    "contact.note":
      "هل لديك فكرة أو خطأ أو مشروع؟ اكتب إلى أي من العناوين أعلاه.",
  },
};

/* ---------------- uygulama ---------------- */

function applyLang(lang) {
  const d = DICT[lang] || DICT.tr;
  const m = META[lang] || META.tr;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = d[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = d[el.dataset.i18nHtml];
    if (v != null) el.innerHTML = v;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const v = d[key];
      if (attr && v != null) el.setAttribute(attr, v);
    });
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = m.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = m.desc;

  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("on", b.dataset.lang === lang);
  });

  /* Adres çubuğunu güncelle: ?lang=xx ile doğru dille paylaşılabilir */
  try {
    const u = new URL(location.href);
    if (u.searchParams.get("lang") !== lang) {
      u.searchParams.set("lang", lang);
      history.replaceState(null, "", u.pathname + "?" + u.searchParams.toString() + u.hash);
    }
  } catch (e) {}

  try { localStorage.setItem("dil", lang); } catch (e) {}
}

// başlangıç dili: URL (?lang=) → kayıtlı tercih → tarayıcı dili → Türkçe
(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem("dil"); } catch (e) {}
  const nav = (navigator.language || "tr").toLowerCase();
  const tarayici = nav.startsWith("ar") ? "ar" : nav.startsWith("en") ? "en" : "tr";

  let q = null;
  try { q = new URLSearchParams(location.search).get("lang"); } catch (e) {}

  applyLang(q && DICT[q] ? q : saved || tarayici);
})();

document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => applyLang(b.dataset.lang));
});

/* ---------------- tema ---------------- */
const KEY = "tema";
const root = document.documentElement;
const savedTheme = localStorage.getItem(KEY);
if (savedTheme) root.dataset.theme = savedTheme;
else if (matchMedia("(prefers-color-scheme: light)").matches) root.dataset.theme = "light";

const themeToggle = document.getElementById("themeToggle");

function syncThemeIcon() {
  const light = root.dataset.theme === "light";
  themeToggle.textContent = light ? "☾" : "☀";
  themeToggle.setAttribute("aria-pressed", light ? "true" : "false");
}
syncThemeIcon();

themeToggle.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem(KEY, next);
  syncThemeIcon();
});

/* ---------------- kopyala ---------------- */
const toast = document.getElementById("toast");
let toastTimer;

document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const t = document.createElement("textarea");
      t.value = text;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);

    btn.classList.add("done");
    clearTimeout(btn._doneTimer);
    btn._doneTimer = setTimeout(() => btn.classList.remove("done"), 1500);
  });
});

/* ---------------- misc ---------------- */
document.getElementById("yil").textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll(".topbar nav a")];
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    navLinks.forEach((a) =>
      a.style.setProperty("color", a.hash === "#" + e.target.id ? "var(--fg)" : "")
    );
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach((s) => io.observe(s));

/* =========================================================
   Arayüz geliştirmeleri — animasyonlar, menü, kaydırma
   ========================================================= */

const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- sayı sayacı (istatistikler + yüzde etiketleri) ---------- */
function countUp(el) {
  const raw = (el.textContent || "").trim();
  const m = raw.match(/^(\d+)(\D*)$/);
  if (!m) return;
  const hedef = parseInt(m[1], 10);
  const son = m[2] || "";
  if (REDUCE || !hedef) { el.textContent = hedef + son; return; }

  const sure = 950;
  const t0 = performance.now();
  (function adim(t) {
    const p = Math.min(1, (t - t0) / sure);
    el.textContent = Math.round(hedef * (1 - Math.pow(1 - p, 3))) + son;
    if (p < 1) requestAnimationFrame(adim);
  })(t0);
}

/* ---------- görünüre girince açılan öğeler ---------- */
(function reveals() {
  const sel =
    ".section h2, .grid.two > p, .card, .skills, .contact-card, .contact-note, .scroll-hint";
  const els = [...document.querySelectorAll(sel)];

  const sayac = new Map();
  els.forEach((el) => {
    const p = el.parentElement;
    const i = sayac.get(p) || 0;
    sayac.set(p, i + 1);
    el.classList.add("reveal");
    el.style.setProperty("--d", (i * 0.08).toFixed(2) + "s");
  });

  const stats = document.querySelector(".stats");
  if (stats) {
    stats.classList.add("prep");
    [...stats.children].forEach((d, i) =>
      d.style.setProperty("--d", (i * 0.1).toFixed(2) + "s")
    );
  }

  const hedefler = stats ? [...els, stats] : els;

  const goster = (el) => {
    el.classList.add("in");
    if (el.classList.contains("stats")) el.querySelectorAll("[data-count]").forEach(countUp);
    if (el.classList.contains("skills")) el.querySelectorAll(".pct").forEach(countUp);
  };

  if (!("IntersectionObserver" in window) || REDUCE) {
    hedefler.forEach(goster);
    return;
  }

  const ro = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      goster(e.target);
      ro.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });

  hedefler.forEach((t) => ro.observe(t));
})();

/* ---------- kaydırma: ilerleme çubuğu, üst bar, yukarı çık ---------- */
(function scrollUI() {
  const bar = document.getElementById("progress");
  const toTop = document.getElementById("toTop");
  let bekliyor = false;

  function guncelle() {
    bekliyor = false;
    const y = window.scrollY || document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = "scaleX(" + (h > 0 ? Math.min(1, y / h) : 0) + ")";
    document.body.classList.toggle("scrolled", y > 8);
    if (toTop) toTop.classList.toggle("show", y > 520);
  }

  addEventListener("scroll", () => {
    if (bekliyor) return;
    bekliyor = true;
    requestAnimationFrame(guncelle);
  }, { passive: true });

  guncelle();

  if (toTop) {
    toTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: REDUCE ? "auto" : "smooth" })
    );
  }
})();

/* ---------- mobil menü ---------- */
(function mobileMenu() {
  const topbar = document.querySelector(".topbar");
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("navMenu");
  if (!topbar || !btn || !menu) return;

  const kapat = () => {
    topbar.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };

  btn.addEventListener("click", () => {
    const acik = topbar.classList.toggle("open");
    btn.setAttribute("aria-expanded", acik ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", kapat));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") kapat();
  });

  document.addEventListener("click", (e) => {
    if (!topbar.contains(e.target)) kapat();
  });
})();
