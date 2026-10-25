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
    title: "مُمين — مطوّر تطبيقات وأدوات",
    desc: "الموقع الشخصي لمُمين. تطبيقات أندرويد وسطح مكتب وويب؛ ذكاء اصطناعي وشبكات وأدوات خرائط.",
  },
};

const DICT = {
  /* ---------------- TÜRKÇE ---------------- */
  tr: {
    "nav.about": "Hakkımda",
    "nav.projects": "Projeler",
    "nav.skills": "Yetenekler",
    "nav.contact": "İletişim",

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
    "c2.title": "ESP32 ile Kişi Tespiti ve Konum Tahmini",
    "c2.desc":
      "ESP32 üzerine kurulu yapay zekâ projesi. Görüş alanındaki, hatta engellerin arkasındaki kişiyi tespit edip yerini tahmin ediyor.",
    "c2.f1": "Donanım üzerinde çalışan hafif model (edge AI)",
    "c2.f2": "Sensör/görüntü verisinden kişi tespiti",
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
    "c2.title": "Person Detection and Location Prediction with ESP32",
    "c2.desc":
      "An AI project built on the ESP32. It detects a person in its field of view — even behind obstacles — and predicts their location.",
    "c2.f1": "Lightweight model running on the hardware (edge AI)",
    "c2.f2": "Person detection from sensor / image data",
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
    "c2.title": "كشف الأشخاص وتحديد موقعهم باستخدام ESP32",
    "c2.desc":
      "مشروع ذكاء اصطناعي مبني على ESP32. يكتشف الشخص داخل مجال الرؤية، وحتى خلف العوائق، ويتنبأ بموقعه.",
    "c2.f1": "نموذج خفيف يعمل على العتاد (ذكاء اصطناعي طرفي)",
    "c2.f2": "كشف الأشخاص من بيانات المستشعرات والصور",
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

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = m.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = m.desc;

  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("on", b.dataset.lang === lang);
  });

  try { localStorage.setItem("dil", lang); } catch (e) {}
}

// başlangıç dili: kayıtlı tercih → tarayıcı dili → Türkçe
(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem("dil"); } catch (e) {}
  const nav = (navigator.language || "tr").toLowerCase();
  let lang = saved || (nav.startsWith("ar") ? "ar" : nav.startsWith("en") ? "en" : "tr");
  applyLang(lang);
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

document.getElementById("themeToggle").addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem(KEY, next);
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
