// Yıl otomatik güncellensin
document.getElementById("yil").textContent = new Date().getFullYear();

// Tema: kullanıcı tercihini hatırla, yoksa sistem ayarını izle
const KEY = "tema";
const root = document.documentElement;
const saved = localStorage.getItem(KEY);
if (saved) root.dataset.theme = saved;
else if (matchMedia("(prefers-color-scheme: light)").matches) root.dataset.theme = "light";

document.getElementById("themeToggle").addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem(KEY, next);
});

// Aktif menü vurgusu
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
