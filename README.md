# engmumin.work.gd — kişisel site

Statik, build gerektirmeyen tek sayfalık portfolyo. HTML + CSS + JavaScript
(3 dil: TR / EN / AR, tema, kopyalama).

```
site/
├── dil.html     # İlk açılışta görülen dil seçme sayfası
├── index.html   # Yapı ve varsayılan (Türkçe) metinler
├── styles.css   # Tema, düzen, RTL (Arapça) kuralları
├── script.js    # Çeviri sözlüğü + tema + dil seçimi + kopyala
└── CNAME        # GitHub Pages'e özel alan adı
```

### Dil akışı

1. Ziyaretçi siteye girer → `dil.html` açılır (tercih `localStorage.dil`'de yoksa).
2. TR / EN / AR seçilir → tercih kaydedilir, `index.html`'e geçilir.
3. Sonraki ziyaretlerde doğrudan site açılır; sağ üstteki **TR · EN · AR**
   düğmeleriyle dil her an değiştirilebilir.
4. Tercihi silinirse (gizli sekme dahil) seçim ekranı tekrar gelir.

## İçeriği düzenleyin

Site **3 dilde** yayında: **Türkçe / English / العربية** (sağ üstteki TR·EN·AR düğmeleri).

Tüm metinler `script.js` içindeki `DICT` nesnesinde, dil dil anahtar-ad çifti
olarak durur. Yeni bir metin eklemek için:

1. `index.html` içinde görünüre `data-i18n="anahtar"` ekleyin (HTML içi
   `<strong>` gibi etiket gerekiyorsa `data-i18n-html` kullanın).
2. `script.js` → `DICT.tr`, `DICT.en`, `DICT.ar` içine aynı anahtarı üç dilde
   de tanımlayın.
3. Erişilebilir metinlerde (`aria-label`) `data-i18n-attr="aria-label:anahtar"`
   kullanın.

Arapça seçildiğinde sayfa otomatik olarak `dir="rtl"` ile sağdan sola açılır.

### `index.html` içindeki değişilecek noktalar

| Ne | Nerede |
|---|---|
| İsim / başlık | `<title>`, `og:title`, `<h1>`, `<footer>` |
| Kendi projeniz | `id="projeler"` içindeki `<article class="card">` |
| Yetenek yüzdelikleri | `style="--v:92%"` değerleri |
| E-posta | `href="mailto:..."` |
| Telefon | `href="tel:+964..."` |
| İstatistikler | `<dl class="stats">` |

Yeni kart eklemek için mevcut `<article class="card">…</article>` bloğunu
kopyalayıp `class="card placeholder"` satırını silin.

## Otomatik güncelleme (git) sistemi

Depo kökünde `scripts/` klasörü altında çalışan otomatik commit + push sistemi
kurulu. Hiçbir komut yazmadan düzenlediğiniz dosyalar commit'lenir ve GitHub'a
gider (GitHub Pages böylece kendiliğinden yayılanır).

| Dosya | Ne yapar |
|---|---|
| `scripts/otomatik-guncelleme.ps1` | 15 saniyede bir değişiklikleri kontrol eder; fark varsa `add -A` → `commit` → `push origin main` yapar. Log: `.git/otomatik-guncelleme.log` |
| `scripts/otomatik-guncelleme-baslat.cmd` | Betiği gizli pencerede çalıştırır (arka planda). |
| `scripts/hemen-guncelle.cmd` | Bir kez çalıştırıp çıkar — acil commit + push. |
| `scripts/baslangica-ekle.ps1` | Windows girişinde otomatik başlamasını sağlar (yönetici yetkisi gerekmez). |
| `scripts/baslat-arka-plan.ps1` | İzleyiciyi gizli, bağımsız bir süreç olarak başlatır (kapanan konsoldan etkilenmez). |
| `scripts/baslangica-cikar.ps1` | Acilis kisayolunu kaldırır. |
| `scripts/dur.cmd` | Çalışan otomatik guncellemeyi durdurur. |

### Kullanım

```powershell
# Sürekli çalışan arka plan modu (15 sn'de bir kontrol):
powershell -ExecutionPolicy Bypass -File scripts\otomatik-guncelleme.ps1

# Bir kez çalıştır:
powershell -ExecutionPolicy Bypass -File scripts\otomatik-guncelleme.ps1 -TekGecis

# Açılışta otomatik başlasın:
powershell -ExecutionPolicy Bypass -File scripts\baslangica-ekle.ps1
```

Parametreler: `-AralikSaniye 30` (kontrol aralığı), `-ElleMesaj "metin"`
(commit mesajı), `-TekGecis` (tek seferlik).

### Kurulum kontrolü

```powershell
git remote -v        # origin adresi gerçek repo adresiniz olmalı
```

Bu depo: `https://github.com/yfgd5179-debug/mumin2` (GitHub Pages `main` /
kök dalından yayınlar).

Adres henüz şablonsa (`https://github.com/KULLANICI/depo.git`) betik push'u
atlar ve yalnızca lokal commit atar. Gerçek adresi verin:

```powershell
git remote set-url origin https://github.com/KULLANICI-ADINIZ/REPO-ADI.git
```

Push ilk kez kimlik doğrulama ister; Windows Git Credential Manager bilgiyi
hatırladıktan sonra süreç tamamen sessiz çalışır.

> Not: `.git` klasöründeki `otomatik-guncelleme.log` commit'lere girmez.

## SEO, 404 ve otomatik denetim (CI)

### SEO paketi

| Dosya | Ne işe yarar |
|---|---|
| `robots.txt` | Tarama izinleri + `Sitemap` bildirimi |
| `sitemap.xml` | `https://engmumin.work.gd/` için son güncelleme ve dil alternatifleri |
| `index.html` head | `hreflang` (tr/en/ar/x-default), `og:locale`, **JSON-LD Person şeması** (isim, unvan, `sameAs`, `knowsAbout`) |
| `script.js` | `?lang=tr\|en\|ar` ile sayfa o dile açılır; dil değişince adres çubuğu güncellenir → doğru dille paylaşılabilir |

```text
https://engmumin.work.gd/?lang=ar   ← Arapça açılır
https://engmumin.work.gd/?lang=en   ← İngilizce açılır
```

### 404 sayfası

`404.html` — üç dilde "Sayfa bulunamadı" ekranı, ana sayfa/dil seçici butonları ve
bölüm bağlantılarıyla. GitHub Pages yanlış adreslerde otomatik gösterir.

### Otomatik denetim (GitHub Actions)

`.github/workflows/ci.yml` her `main` push'unda (ve PR'larda) iki iş çalıştırır:

1. **Depo bütünlüğü** — `scripts/denetle.py`:
   - yerel `href`/`src` hedefleri var mı (kırık bağlantı yok mu),
   - kullanılan her `data-i18n` anahtarı **3 dilde de** tanımlı mı,
   - `DICT.tr/en/ar` arasında eksik/fazla anahtar var mı,
   - `<title>`, `charset`, `viewport`, `lang`, yinelenen `id`, `<img alt>` denetimi,
   - ardından dosyaları yerel sunucuda açıp `/`, `/dil.html`, `/404.html`,
     `/robots.txt`, `/sitemap.xml` 200 döner mi diye bakar.
2. **Lighthouse CI** — `lighthouserc.json` eşikleri:
   erişilebilirlik / SEO / iyi uygulamalar ≥ **0.9** (hata), performans ≥ 0.7 (uyarı).
   Raporlar iş akışı artifacts'inde saklanır.

Yerelde de aynı denetimi çalıştırabilirsiniz:

```powershell
python scripts\denetle.py
```

> **Öneri (elle yapılacak tek adım):** Repo → *Settings → Branches* → `main` için
> *"Require status checks to pass before merging"* → `Depo bütünlüğü` ve
> `Lighthouse denetimi` işaretleyin. Böylece hatalı push doğrudan engellenir.

## Yerelde önizleme

Site klasöründe bir sunucu açın:

```powershell
cd site
npx serve .
# veya Python ile:
python -m http.server 8080
```

Tarayıcıda `http://localhost:8080` açın.

## Yayına alma — GitHub Pages (önerilen, ücretsiz)

1. GitHub'da yeni bir **public** repo açın (örn. `engmumin-site`).
2. `site/` klasörünün içeriğini reposun köküne kopyalayın (kendi klasörüyle
   değil, `index.html` doğrudan kökte olmalı):

   ```powershell
   cd site
   git init
   git add .
   git commit -m "İlk yayın"
   git branch -M main
   git remote add origin https://github.com/KULLANICI-ADIN/engmumin-site.git
   git push -u origin main
   ```

3. Repo → **Settings → Pages** → Source: **Deploy from a branch**,
   Branch: **main / (root)** → Save.
4. 1–2 dakika sonra `KULLANICI-ADIN.github.io/engmumin-site` adresinde görürsünüz.

> `CNAME` dosyası GitHub'a özel alan adını bağlar; onu da commit edin.

## engmumin.work.gd adresini bağlama

`work.gd`, DNSExit / FreeDomain.one altındaki ücretsiz bir servistir; alt alan
adının DNS kayıtlarını siz yönetirsiniz.

### 1. GitHub Pages'in adlarını alın

Settings → Pages → **Custom domain** alanına `engmumin.work.gd` yazıp Save edin.
GitHub size şu iki kaydı verecektir (genelde):

```
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    KULLANICI-ADIN.github.io
```

### 2. DNSExit panelinde kayıtları girin

freedomain.one (veya dnsexit.com) hesabınıza giriş yapıp `engmumin` alt alan
adını düzenleyin; yukarıdaki kayıtları **aynen** ekleyin.

### 3. Doğrulama ve HTTPS

- DNS yayıldıktan sonra GitHub Pages'te **Enforce HTTPS** kutusunu işaretleyin.
- Yayılımı kontrol etmek için:

  ```powershell
  nslookup engmumin.work.gd
  ```

  Dört GitHub IP'sinden birini döndürmelidir.

> Not: `www.engmumin.work.gd` için ayrıca `CNAME` → `KULLANICI-ADIN.github.io`
> kaydı ekleyip GitHub'a ek domain olarak eklemeniz gerekir.

## HTTPS sertifikası

Üç seçenek:

1. **GitHub Pages** (önerilen) — DNS doğrulandıktan sonra Let's Encrypt
   sertifikası otomatik gelir, *Enforce HTTPS* işaretlenir. Ekstra hiçbir şey
   gerekmez.
2. **DNSExit ücretsiz SSL** — [freedomain.one/services/free-SSL-TLS-certificates](https://freedomain.one/services/free-SSL-TLS-certificates/)
   ile 90 günlük, otomatik yenilenen sertifika (kendi sunucunuza kurduysanız).
3. **Netlify / Vercel** — sertifikayı kendileri verir, siz sadece CNAME
   eklersiniz.

> ⚠️ **Cloudflare kullanamazsınız:** Cloudflare bir alan adını hesabınıza
> eklemek için *kayıtlı* bir alan adı ister. `engmumin.work.gd` bir alt alan
> adı olduğu için ayrı bir bölge olarak eklenemez.

## Alternatif yayınlama seçenekleri

| Servis | CNAME hedefi |
|---|---|
| Cloudflare Pages | proje adı.pages.dev |
| Netlify | proje.netlify.app |
| Vercel | proje.vercel.app |

Hepsi ücretsiz statik hosting verir; `CNAME` dosyasına o servisin adını yazmanız
yeterli (GitHub Pages'teki `A` kayıtları yerine tek bir `CNAME` kaydı kullanın).

## E-posta — `ad@engmumin.work.gd`

Alan adı zaten DNSExit / FreeDomain.one üzerinden kayıtlı olduğu için ek
doğrulama gerekmez; DNSExit'in kendi e-posta servislerini aynen kullanabilirsiniz.

### Seçenek A — DNSExit Business Email (gerçek gelen kutusu)

[freedomain.one/services/free-email-hosting](https://freedomain.one/services/free-email-hosting/)

Panelden **Business Email** bölümüne gidin (*Email Forwarding* değil):

- Panoya göre **2 adres, toplam 100 MB, reklamsız, sonsuza dek ücretsiz**
- Webmail + IMAP + POP3 + SMTP relay
- SPF / DKIM / anti-spam / virüs taraması dahil

> ⚠️ Panende ücretsiz görünmüyorsa (alan adı FreeDomain.one üzerinden
> alındığı için farklı muamele görebilir) Seçenek B'ye geçin.

**Kurulum:**

1. [freedomain.one/users/signup](https://freedomain.one/users/signup/) ile hesap açın
   (alan adınızı yönettiğiniz hesapla aynı olmalı).
2. Panelden **Business Email** → alan adınızı seçin → adres oluşturun
   (ör. `merhaba@engmumin.work.gd`).
3. Servis MX kayıtlarını DNS'e otomatik yazar. Elle yazmanız gerekirse:

   | Tür | Sunucu | Öncelik |
   |---|---|---|
   | MX | `mx1.dnsexit.com` | 10 |
   | TXT (SPF) | `v=spf1 include:_spf.dnsexit.com ~all` | — |

4. **Webmail:** [webmail.dnsexit.com](https://webmail.dnsexit.com)

**Mail istemcisi ayarları (Outlook / Thunderbird / telefon):**

| | Sunucu | Port |
|---|---|---|
| Gelen (IMAP) | `pop.dnsexit.com` | 143 (STARTTLS) |
| Gelen (POP3) | `pop.dnsexit.com` | 110 |
| Giden (SMTP) | `out.dnsexit.com` | 587 (STARTTLS) |

### Seçenek B — ImprovMX (tamamen ücretsiz yönlendirme)

> DNSExit'in kendi **Email Forwarding** servisi ücretlidir: **$6.99/yıl** (5 adres),
> ayrıca DNSExit'e kayıtlı olmayan alan adlarında +$4/yıl. Ücretsiz alternatif aşağıda.

[ImprovMX Free](https://improvmx.com/pricing#free) — **1 alan adı, 25 takma ad,
günde 500 e-posta, kredi kartı yok, sonsuza dek ücretsiz.**

1. [app.improvmx.com/signup](https://app.improvmx.com/signup) → ücretsiz hesap
2. Domain ekleyin: `engmumin.work.gd`
3. Size verdiği kayıtları DNSExit paneline girin:

   | Tip | Host | Değer |
   |---|---|---|
   | `TXT` | `@` | `improvmx-verification=<SANA_VERİLEN_KOD>` |
   | `MX` | `@` | `mx1.improvmx.com` (öncelik 10) |
   | `MX` | `@` | `mx2.improvmx.com` (öncelik 20) |
   | `TXT` | `@` | `v=spf1 include:spf.improvmx.com ~all` |

4. Panelden alias ekleyin: `merhaba` → `siz@gmail.com`

**Gönderim için (Gmail):** Ayarlar → Hesaplar ve içe aktarma → *Başka bir
e-posta adresi ekle* → `merhaba@engmumin.work.gd`, sunucu `smtp.improvmx.com`.
Böylece gelen posta Gmail'inize düşer, **yanıtlar** kendi adresinizden gider.

### Seçenek C — DNSExit Email Forwarding (ücretli)

Ekran görüntüsündeki paket bu: [Email Forwarding](https://freedomain.one/services/email-forwarding/)
$6.99/yıl (5 adres), MX kayıtlarını onlar uygular. Ödemek istemiyorsanız
Seçenek B kullanın.

### Güvenlik kontrolü

```powershell
nslookup -type=MX engmumin.work.gd
nslookup -type=TXT engmumin.work.gd
```

SPF kaydı `v=spf1 ...` ile başlamalı; aksi halde Gmail/Outlook postanızı
spam'e atar.
