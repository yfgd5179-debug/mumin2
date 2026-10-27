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

/* ---- Dış hizmet uç noktaları (nasıl kurulacağı: README) ----
     FORM_URL : Google Apps Script Web App adresi. Boş bırakılırsa form
                gönderildiğinde posta programı doldurulup açılır (mailto yedeği).
     ANALYTIK : GoatCounter site kodu (goatcounter.com). Boş bırakılırsa
                hiçbir analitik yüklenmez — varsayılan durum budur.        */
const FORM_URL = "";
const ANALYTIK = "engmumin";

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
    "ui.skip": "İçeriğe geç",
    "foot.lang": "Dil değiştir",
    "ui.more": "Detay",
    "ui.less": "Gizle",
    "c1.d0": "Bir işi tek cümlede tarif edersin; Jarvis bunu uygulanabilir adımlara böler, sırayla yürütür ve sonda ne yaptığını özetler.",
    "c1.d1": "Kendi adım planını kurar, araçları sırayla kullanır",
    "c1.d2": "Bir adım tutmazsa geri dönüp başka yolu dener",
    "c1.d3": "Sonda ne yapıldığını kısa bir raporla verir",
    "c2.d0": "Amaç engel arkasında ne olduğunu anlamak: sensör verisi modelden geçer, kişinin yaklaşık konumu işaretle gösterilir.",
    "c2.d1": "Sensör verisi → model → konum çıktısı",
    "c2.d2": "Ağır hesap buluta değil, cihazın kendisine düşer",
    "c2.d3": "Duvar gibi katı engellerin arkası da algılanır",
    "c3.d0": "Kurum içindeki bilgisayarlar birbirini kendiliğinden bulur; mesaj ve dosya, sunucu ya da internet kurmadan doğrudan akar.",
    "c3.d1": "Ağdaki kullanıcılar otomatik listelenir",
    "c3.d2": "Dosyalar yerel ağ hızında gider, yükleme beklenmez",
    "c3.d3": "Sunucu kurulumu ve internet çıkışı gerekmez",
    "c4.d0": "Emlakçı ilan numarasını müşteriye anlatmak zorunda kalmaz: haritada gösterir, tıklayınca kayıt bilgisi açılır.",
    "c4.d1": "İlan ve parsel numaraları aynı ekranda görünür",
    "c4.d2": "Bölge ve numara aramasıyla kayıt saniyeler içinde bulunur",
    "c4.d3": "Kayıtlar veritabanından yönetilir, tek tek düzenlenmez",
    "c5.d0": "Uygulama önce sorunu kendisi arar: kontrolleri sırayla yapar, hangi ayarın eksik olduğunu söyler ve o ayarın ekranına götürür.",
    "c5.d1": "Teşhis → neden → çözüm sırasıyla ilerler",
    "c5.d2": "Her adımda tek dokunuşla doğru ayar ekranı açılır",
    "c5.d3": "Gerekli ADB komutları kopyalanabilir şekilde listelenir",
    "form.title": "Mesaj gönder",
    "form.lead": "Formu doldur; mesajın doğrudan e-posta adresime düşsün.",
    "form.name": "Adın",
    "form.namePh": "Ad Soyad",
    "form.email": "E-posta",
    "form.emailPh": "ornek@mail.com",
    "form.message": "Mesajın",
    "form.msgPh": "Ne üzerine konuşalım?",
    "form.submit": "Gönder",
    "form.alt": "Ya da doğrudan yaz: 1@engmumin.work.gd",
    "form.sending": "Gönderiliyor…",
    "form.done": "Mesajın iletildi, teşekkürler ✓",
    "form.err": "Lütfen alanları kontrol et: ad, e-posta ve mesaj.",
    "form.fail": "Gönderilemedi — doğrudan e-posta yazabilirsin.",
    "form.mailto": "Posta programın açıldı; mesajı oradan gönderebilirsin.",
    "ui.scroll": "Aşağı kaydır",
    "ui.scrollText": "Aşağı kaydır",

    "hero.name": "Mümin",
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
    "ui.skip": "Skip to content",
    "foot.lang": "Change language",
    "ui.more": "Details",
    "ui.less": "Hide",
    "c1.d0": "You describe a job in one sentence; Jarvis breaks it into doable steps, runs them in order and sums up what it did.",
    "c1.d1": "Builds its own step plan and uses tools in order",
    "c1.d2": "If a step fails it backtracks and tries another way",
    "c1.d3": "Ends with a short report of what was done",
    "c2.d0": "The goal is to know what is behind the obstacle: sensor data goes through the model and the person's approximate location is marked.",
    "c2.d1": "Sensor data → model → location output",
    "c2.d2": "Heavy computation runs on the device, not in the cloud",
    "c2.d3": "Works behind solid obstacles such as walls",
    "c3.d0": "Computers on the office network find each other automatically; messages and files flow directly, with no server or internet setup.",
    "c3.d1": "Users on the network are listed automatically",
    "c3.d2": "Files travel at LAN speed — no uploading",
    "c3.d3": "No server installation and no internet connection needed",
    "c4.d0": "No need to dictate the listing number: it is shown on the map, and a click opens the record.",
    "c4.d1": "Listing and parcel numbers on the same screen",
    "c4.d2": "Find a record in seconds by area or number",
    "c4.d3": "Records are managed from the database, not edited one by one",
    "c5.d0": "The app looks for the problem itself: it runs the checks in order, says which setting is missing and takes you to that screen.",
    "c5.d1": "Diagnosis → cause → fix, in order",
    "c5.d2": "One tap opens the right settings screen at every step",
    "c5.d3": "Required ADB commands are listed, ready to copy",
    "form.title": "Send a message",
    "form.lead": "Fill in the form and the message goes straight to my inbox.",
    "form.name": "Your name",
    "form.namePh": "Full name",
    "form.email": "Email",
    "form.emailPh": "you@example.com",
    "form.message": "Your message",
    "form.msgPh": "What should we talk about?",
    "form.submit": "Send",
    "form.alt": "Or write directly: 1@engmumin.work.gd",
    "form.sending": "Sending…",
    "form.done": "Message delivered, thank you ✓",
    "form.err": "Please check the fields: name, email and message.",
    "form.fail": "Could not send — feel free to email instead.",
    "form.mailto": "Your mail app opened; send it from there.",
    "ui.scroll": "Scroll down",
    "ui.scrollText": "Scroll down",

    "hero.name": "Mümin",
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
    "ui.skip": "تخطَّ إلى المحتوى",
    "foot.lang": "تغيير اللغة",
    "ui.more": "التفاصيل",
    "ui.less": "إخفاء",
    "c1.d0": "تصف المهمة بجملة واحدة؛ فيقسّمها جارفيس إلى خطوات قابلة للتنفيذ، وينفّذها بالترتيب ثم يختصر ما فعله.",
    "c1.d1": "يبني خطة خطواته الخاصة ويستخدم الأدوات بالترتيب",
    "c1.d2": "إذا لم تنجح خطوة يعود ويجرّب طريقًا آخر",
    "c1.d3": "ينتهي بتقرير قصير عمّا تم",
    "c2.d0": "الهدف معرفة ما خلف العائق: تمرّ بيانات المستشعر عبر النموذج ويُعلَّم الموقع التقريبي للشخص.",
    "c2.d1": "بيانات المستشعر ← النموذج ← مخرجات الموقع",
    "c2.d2": "الحساب الثقيل يتم على الجهاز نفسه لا في السحابة",
    "c2.d3": "يعمل خلف العوائق الصلبة مثل الجدار",
    "c3.d0": "تكتشف أجهزة الشبكة الداخلية بعضها تلقائيًا، وتجري الرسائل والملفات مباشرة دون خادم أو إنترنت.",
    "c3.d1": "تُعرض مستخدمات الشبكة تلقائيًا",
    "c3.d2": "تنتقل الملفات بسرعة الشبكة المحلية دون رفع",
    "c3.d3": "لا حاجة لتثبيت خادم ولا لاتصال بالإنترنت",
    "c4.d0": "لا حاجة لشرح رقم الإعلان للعميل: يُعرض على الخريطة، والنقر يفتح بيانات السجل.",
    "c4.d1": "أرقام الإعلانات والقطع في الشاشة نفسها",
    "c4.d2": "اعثر على السجل خلال ثوانٍ بالمنطقة أو الرقم",
    "c4.d3": "تُدار السجلات من قاعدة البيانات لا يدويًا",
    "c5.d0": "يبحث التطبيق عن المشكلة بنفسه: يشغّل الفحوص بالترتيب، ويقول أي إعداد ناقص، ويأخذك إلى شاشته.",
    "c5.d1": "تشخيص ← سبب ← حل بالترتيب",
    "c5.d2": "نقرة واحدة تفتح شاشة الإعداد الصحيحة في كل خطوة",
    "c5.d3": "أوامر ADB المطلوبة معروضة وجاهزة للنسخ",
    "form.title": "أرسل رسالة",
    "form.lead": "املأ النموذج وتصلك الرسالة مباشرة في بريدي.",
    "form.name": "اسمك",
    "form.namePh": "الاسم الكامل",
    "form.email": "البريد الإلكتروني",
    "form.emailPh": "name@example.com",
    "form.message": "رسالتك",
    "form.msgPh": "بماذا نتحدث؟",
    "form.submit": "إرسال",
    "form.alt": "أو راسلني مباشرة: 1@engmumin.work.gd",
    "form.sending": "جارٍ الإرسال…",
    "form.done": "تم إرسال رسالتك، شكرًا لك ✓",
    "form.err": "يرجى التحقق من الحقول: الاسم والبريد والرسالة.",
    "form.fail": "تعذّر الإرسال — يمكنك المراسلة بالبريد مباشرة.",
    "form.mailto": "تم فتح تطبيق البريد لديك؛ أرسلها من هناك.",
    "ui.scroll": "مرّر إلى الأسفل",
    "ui.scrollText": "مرّر إلى الأسفل",

    "hero.name": "مؤمن",
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

  /* proje kartındaki detay düğmesi: açıkken "Gizle", kapalıyken "Detay" */
  document.querySelectorAll("[data-i18n-more]").forEach((el) => {
    const acik = el.getAttribute("aria-expanded") === "true";
    const v = d[acik ? el.dataset.i18nLess : el.dataset.i18nMore];
    if (v != null) el.textContent = v;
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = m.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = m.desc;

  document.querySelectorAll(".lang button").forEach((b) => {
    const secili = b.dataset.lang === lang;
    b.classList.toggle("on", secili);
    b.setAttribute("aria-pressed", secili ? "true" : "false");
  });

  /* Adres çubuğu: TR için "/", diğerleri için ?lang=xx (hreflang ile aynı adresler) */
  try {
    const u = new URL(location.href);
    const istenen = lang === "tr" ? null : lang;
    const mevcut = u.searchParams.get("lang");
    if (mevcut !== istenen) {
      if (istenen) u.searchParams.set("lang", istenen);
      else u.searchParams.delete("lang");
      history.replaceState(null, "", u.pathname + u.search + u.hash);
    }
    /* canonical her zaman sayfanın kendi adresini göstermeli (hreflang uyumu) */
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.href = u.origin + u.pathname + u.search;
  } catch (e) {}

  try { localStorage.setItem("dil", lang); } catch (e) {}
}

/* URL'deki ilk ?lang= değeri — applyLang adres çubuğunu değiştirmeden önce okunur */
const URL_LANG = (() => {
  try { return new URLSearchParams(location.search).get("lang"); } catch (e) { return null; }
})();

/* Kayıtlı dil tercihi — applyLang yazmadan ÖNCEki hâli (dil katmanı bunu sorar) */
const ILK_DIL_KAYDI = (() => {
  try { return localStorage.getItem("dil"); } catch (e) { return null; }
})();

// başlangıç dili: URL (?lang=) → kayıtlı tercih → tarayıcı dili → Türkçe
(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem("dil"); } catch (e) {}
  const nav = (navigator.language || "tr").toLowerCase();
  const tarayici = nav.startsWith("ar") ? "ar" : nav.startsWith("en") ? "en" : "tr";

  applyLang(URL_LANG && DICT[URL_LANG] ? URL_LANG : saved || tarayici);
})();

document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => {
    applyLang(b.dataset.lang);
    analitikDilKaydi();
  });
});

/* Dil değişince ziyareti ayrı bir sayfa gibi kaydet (analitik açıksa) */
function analitikDilKaydi() {
  try {
    if (window.goatcounter && typeof window.goatcounter.count === "function") {
      window.goatcounter.count({
        path: location.pathname + location.search,
        title: document.title,
      });
    }
  } catch (_) {}
}

/* ---------------- proje kartları: detay aç / kapat ---------------- */
document.querySelectorAll(".card-more").forEach((btn) => {
  const panel = document.getElementById(btn.getAttribute("aria-controls"));
  if (!panel) return;
  btn.addEventListener("click", () => {
    const yeni = btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", yeni ? "true" : "false");
    panel.hidden = !yeni;
    const d = DICT[document.documentElement.lang] || DICT.tr;
    const v = d[yeni ? btn.dataset.i18nLess : btn.dataset.i18nMore];
    if (v != null) btn.textContent = v;
    if (yeni && window.Mumin) window.Mumin.olay("proje-detay", btn.getAttribute("aria-controls"));
  });
});

/* ---------------- ilk ziyaret: dil seçim katmanı (yönlendirmesiz) ---------------- */
(function dilKatmani() {
  const katman = document.getElementById("dilSec");
  if (!katman) return;

  /* Seçim zaten yapılmışsa (kayıt veya açılışta gelen ?lang=) katman hiç açılmasın */
  if ((ILK_DIL_KAYDI && DICT[ILK_DIL_KAYDI]) || (URL_LANG && DICT[URL_LANG])) return;

  /* Katman açıkken arkadaki içerik odaklanamaz (aria-modal'ın gerçek karşılığı) */
  const arkalar = ["header", "main", "footer"]
    .map((s) => document.querySelector(s))
    .filter(Boolean);
  const inertVar = typeof HTMLElement !== "undefined" && "inert" in HTMLElement.prototype;

  katman.hidden = false;
  document.documentElement.classList.add("dil-acik");
  if (inertVar) arkalar.forEach((el) => { el.inert = true; });

  const ilk = katman.querySelector("[data-pick]");
  if (ilk) {
    try { ilk.focus({ preventScroll: true }); } catch (e) { try { ilk.focus(); } catch (e2) {} }
  }

  katman.querySelectorAll("[data-pick]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLang(btn.dataset.pick);
      analitikDilKaydi();
      if (inertVar) arkalar.forEach((el) => { el.inert = false; });
      document.documentElement.classList.remove("dil-acik");
      katman.classList.add("kapan");
      setTimeout(() => { katman.hidden = true; }, 240);
    });
  });
})();

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
    ".section h2, .grid.two > p, .card, .skills, .contact-card, .contact-note, .scroll-hint, .form";
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

/* =========================================================
   İletişim formu
   ========================================================= */
(function iletisimFormu() {
  const form = document.getElementById("iletisForm");
  if (!form) return;
  const durum = document.getElementById("fDurum");
  const btn = form.querySelector('[type="submit"]');

  function durumYaz(kod, tip) {
    if (!durum) return;
    const d = DICT[document.documentElement.lang] || DICT.tr;
    durum.textContent = d[kod] || "";
    durum.className = "form-durum" + (tip ? " " + tip : "");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const ad = form.elements.name.value.trim();
    const posta = form.elements.email.value.trim();
    const mesaj = form.elements.message.value.trim();
    const bal = form.elements.website ? form.elements.website.value.trim() : "";

    /* bal küpü doluysa bot gönderilmiştir: sessizce "gönderildi" de */
    if (bal) {
      form.reset();
      durumYaz("form.done", "ok");
      return;
    }

    const hatalar = [];
    if (ad.length < 2) hatalar.push(form.elements.name);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(posta)) hatalar.push(form.elements.email);
    if (mesaj.length < 5) hatalar.push(form.elements.message);

    form.querySelectorAll("input,textarea").forEach((el) => el.removeAttribute("aria-invalid"));
    if (hatalar.length) {
      hatalar.forEach((el) => el.setAttribute("aria-invalid", "true"));
      try { hatalar[0].focus(); } catch (_) {}
      durumYaz("form.err", "hata");
      return;
    }

    btn.disabled = true;
    durumYaz("form.sending");

    /* Uç nokta tanımlı değilse: posta programını doldurup aç (çalışan yol) */
    if (!FORM_URL) {
      const govde =
        "Ad: " + ad + "\nE-posta: " + posta +
        "\nDil: " + document.documentElement.lang + "\n\n" + mesaj;
      window.location.href =
        "mailto:1@engmumin.work.gd?subject=" +
        encodeURIComponent("engmumin.work.gd — " + ad) +
        "&body=" + encodeURIComponent(govde);
      btn.disabled = false;
      durumYaz("form.mailto", "ok");
      return;
    }

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ad: ad,
          posta: posta,
          mesaj: mesaj,
          site: location.href,
          dil: document.documentElement.lang,
        }),
      });
      form.reset();
      durumYaz("form.done", "ok");
    } catch (_) {
      durumYaz("form.fail", "hata");
    } finally {
      btn.disabled = false;
    }
  });
})();

/* =========================================================
   Analitik — yalnızca ANALYTIK kodu doldurulmuşsa yüklenir
   ========================================================= */
if (ANALYTIK) {
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = "https://" + ANALYTIK + ".goatcounter.com/count";
  document.head.appendChild(s);
}

/* ---------------------------------------------------------
   Analitik olayları — Mumin.olay("proje-detay", "c2")
   ANALYTIK boşsa ya da sayaç kütüphanesi yüklenmemişse
   sessizce hiçbir şey yapar (varsayılan durum budur).
   --------------------------------------------------------- */
window.Mumin = window.Mumin || {};
window.Mumin.olay = function (ad, etiket) {
  if (!ANALYTIK) return;
  try {
    if (window.goatcounter && typeof window.goatcounter.count === "function") {
      window.goatcounter.count({
        path: "/olay/" + ad + (etiket ? "/" + etiket : ""),
        title: document.title,
        event: true,
      });
    }
  } catch (_) {}
};

/* =========================================================
   PWA — çevrimdışı kabuk (sw.js): ağa öncelik, olmazsa önbellek
   ========================================================= */
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  });
}
