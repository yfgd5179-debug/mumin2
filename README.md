# engmumin.work.gd — kişisel site

Statik, build gerektirmeyen tek sayfalık portfolyo. HTML + CSS + JavaScript
(3 dil: TR / EN / AR, tema, kopyalama).

```
site/
├── index.html            # Yapı, varsayılan (Türkçe) metinler, dil katmanı
├── dil.html              # Ayrı dil seçme sayfası (altbilgi → "Dil değiştir")
├── styles.css            # Tema, düzen, RTL (Arapça) kuralları
├── script.js             # Çeviri sözlüğü + tema + dil seçimi + kopyala
├── media/                # Proje kartı kapakları (5 adet, metinsiz SVG)
├── 404.html              # Bulunamadı sayfası (3 dil)
├── robots.txt            # Tarama kuralları + sitemap bildirimi
├── sitemap.xml           # 3 dil varyantı (?lang=en / ?lang=ar)
├── og.png                # 1200×630 sosyal paylaşım görseli
├── apple-touch-icon.png  # 180×180 dokunmatik ikon
├── favicon.ico           # 48 + 32 px
├── site.webmanifest      # site adı + tema rengi
├── CNAME                 # GitHub Pages'e özel alan adı
├── .github/workflows/    # CI: bütünlük denetimi + Lighthouse
└── scripts/              # otomatik güncelleme, denetim, görsel üretimi
```

### Dil akışı

1. **İlk ziyaret:** `index.html` açılır, sayfanın üzerine **dil seçim katmanı**
   (`#dilSec`) gelir — yönlendirme yok, ilk boyama gecikmez.
2. TR / EN / AR seçilir → tercih `localStorage.dil`'e yazılır, katman kapanır.
3. Sağ üstteki **TR · EN · AR** düğmeleriyle dil her an değiştirilir; adres
   otomatik olarak `/?lang=en` gibi paylaşılabilir hâle gelir.
4. **Ayrı sayfa:** altbilgideki **“Dil değiştir”** bağlantısı `dil.html`'i açar
   (noindex) — seçim yapılınca `index.html?lang=xx` ile geri dönülür.
5. Tercih silinirse (gizli sekme dahil) seçim katmanı tekrar gelir.

> **Önbellek notu:** GitHub Pages dosyaları 10 dakika tarayıcı önbelleğinde tutar.
> `styles.css` veya `script.js` değiştikten sonra `index.html` içindeki `?v=...`
> değerini artırın (`?v=20261027` gibi) — ziyaretçi yeni sürümü anında görür,
> `Ctrl+F5` gerekmez.

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

Yatay boşluk/ kaydırma üç katmanla kapanır: `html,body{overflow-x:clip}`
(desteklemeyen tarayıcılar `@supports` ile `hidden`'a düşer), dekoratif
ışık taşmaları `min()` ile sınırlı, **bal küpü** (`class="hp"`) ekranda
0px taşma yapar — `left:-9999px`RTL'de tam 10.000px'lik kaydırılabilir
boşluk açıyor ve yalnızca Arapça modunda "boş ekran"a yol açıyordu.
Son katman `script.js`'teki scroll korumasıdır: `window.scrollX` 0'dan
saparsa (RTL'de negatif = sola kayma) anında başa alır.

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

## İletişim formu (şu an bile çalışıyor)

`#iletisim` bölümünde 3 dilde çalışan bir form var: ad, e-posta, mesaj.
Doğrulama, `aria-invalid` işaretlemesi ve **bal küpü** (görünmez robot kapanı)
JavaScript'te; durum mesajları `role="status"` alanı üzerinden okunur.

`script.js` içindeki `FORM_URL` **tanımlı** → form gönderildiğinde mesaj
**Google Apps Script** üzerinden kutunuza düşer **ve** “Mesajlar” tablosuna
yazılır (aşağıdaki kurulum bölümü). `FORM_URL` boşaltılırsa otomatik olarak
`mailto:` yedeği devreye girer; yani form hiçbir koşulda çalışmaz kalmaz.

### Google Apps Script ile gerçek gönderim (ücretsiz)

Kod hazır: **`scripts/apps-script-iletisim.gs`** — hatalı
`getActiveSpreadsheet()` yerine tabloyu kendiliğinden kurar, alan
doğrulaması, hız sınırı ve "Yanıtla" bağlantısı (`replyTo`) içerir.

1. [script.google.com](https://script.google.com) → **Yeni proje** →
   `Code.gs` içine dosyanın **tamamını** yapıştırın.
2. En üstteki `ALICI` satırına mesajların düşeceği adresi yazın.
3. Düzenleyicide **`kur` fonksiyonunu bir kez Çalıştır** ile çalıştırın
   (ilk kez yetki sorar) → Drive'ınızda “engmumin.work.gd — mesajlar”
   tablosu oluşur.
4. **Dağıt → Uygulama için dağıt → Web uygulaması**:
   - *Bu uygulamaya kimler erişebilir*: **Herkes**
   - *Kullanım*: **Herkes**
   - **Dağıt** → size verilen `…/exec` adresini kopyalayın.
5. `script.js` içinde:

   ```js
   const FORM_URL = "https://script.google.com/macros/s/…/exec";
   ```

   Ardından `?v=` damgasını artırın (otomatik izleyici bunu zaten yapar).

Kurulumun doğruluğu: `…/exec` adresini tarayıcıda açın, şu yanıtı
görmelisiniz — `{"ok":true,"mesaj":"iletişim uç noktası çalışıyor"}`.
Sonra formu siteden doldurup gönderin; hem tabloya düşmeli hem e-posta
gelmeli.

> Form `mode: "no-cors"` ile gönderildiği için tarayıcı gövdeyi okuyamaz;
> hataları Google Apps Script’in **Genel kayıtlar** panelinden görürsünüz.
> Ücretsiz kotalar: **MailApp 100 e-posta/gün**, tablo kaydı sınırsız.
> Kod değiştirdiğinizde yeni bir dağıtım sürümü oluşturmanız gerekir
> (eski `…/exec` adresi çalışmaya devam eder).

## Analitik (opsiyonel, çerezsiz)

Kaç kişi giriyor, hangi dil okunuyor bilmiyorsanız **GoatCounter**
(ücretsiz, çerez yok, AB menşeli):

1. [goatcounter.com](https://goatcounter.com) → site kodu alın (örn. `mumin`)
2. `script.js` içinde:

   ```js
   const ANALYTIK = "mumin";
   ```

Kod **boşken hiçbir analitik yüklenmez** (varsayılan budur). Şu an kod
**dolu** — `ANALYTIK = "engmumin"` → sayfa görüntülemeleri otomatik
sayılır; dil düğmelerine **ve dil seçim katmanındaki** butonlara
basıldığında ayrıca `/?lang=xx` ziyareti olarak kaydedilir — böylece dil
dağılımını görürsünüz. Panel: `https://engmumin.goatcounter.com`

Özel olaylar da gönderilebilir (şu an proje kartı detayı açıldığında
`proje-detay` olayı gider):

```js
window.Mumin.olay("proje-detay", "c1-detay");   // ANALYTIK boşsa hiçbir şey yapmaz
```

## PWA — ana ekrana ekleme ve çevrimdışı

Site bir **PWA** olarak çalışır: Android'de Chrome menüsünden
*“Ana ekrana ekle”* dendiğinde uygulama gibi, kendi ikonuyla açılır ve
**ağ olmadığında da** içerik okunur.

| Dosya | Ne işe yarar |
|---|---|
| `site.webmanifest` | `display: standalone`, `id/scope/start_url`, 192–512 px ikonlar (`any` + `maskable`) |
| `sw.js` | Service worker: **gezintilerde ağa öncelik** (her zaman taze HTML, olmazsa önbellek), statik varlıklarda önbellek öncelik + arka planda tazeleme; sürüm değişince eski önbellekler silinir |
| `script.js` (sonu) | `navigator.serviceWorker.register("sw.js")` — yalnızca `http/https` üzerinde |
| `icon-*.png` | `scripts\gorsel-uret.ps1` ile üretilir (elle değil) |

Nasıl çalışır:

- **HTML: ağa öncelik.** Yeni push yayınlandığında ziyaretçi hemen güncel
  sürümü görür; yalnızca internet yoksa önbelleğe düşer.
- **CSS/JS: önbellek öncelik + arka planda tazeleme.** `?v=` damgası
  değişince URL de değişir, dolayısıyla önbellek kendiliğinden tazelenir.
- **Dış originler** (ör. GoatCounter) service worker'a hiç karışmaz.
- İlk yüklemede `/`, `/dil.html`, `/404.html` ve ikon önbelleğe alınır.

Doğrulama (yerel sunucu açıkken): Chrome DevTools → *Application → Service
Workers* “activated and running”, *Cache Storage* içinde `mumin-v1-*`,
*Network → Offline* işaretlenip yenilendiğinde sayfa hâlâ açılıyor.

> Service worker yalnızca güvenli bağlamlarda çalışır (`https://` veya
> `localhost`). Yayın adresi `https://` olduğu için telefonda da çalışır.

## Otomatik güncelleme (git) sistemi

Depo kökünde `scripts/` klasörü altında çalışan otomatik commit + push sistemi
kurulu. Hiçbir komut yazmadan düzenlediğiniz dosyalar commit'lenir ve GitHub'a
gider (GitHub Pages böylece kendiliğinden yayılanır).

| Dosya | Ne yapar |
|---|---|
| `scripts/otomatik-guncelleme.ps1` | **5 dakikada** bir (`-AralikSaniye` ile değiştirilebilir) değişiklikleri kontrol eder; fark varsa önce `sitemap.xml` içindeki `lastmod` tarihini bugüne çeker, sonra `add -A` → `commit` → `push origin main` yapar. Log: `.git/otomatik-guncelleme.log` |
| `scripts/otomatik-guncelleme-baslat.cmd` | Betiği gizli pencerede çalıştırır (arka planda). |
| `scripts/hemen-guncelle.cmd` | Bir kez çalıştırıp çıkar — acil commit + push. |
| `scripts/baslangica-ekle.ps1` | Windows girişinde otomatik başlamasını sağlar (yönetici yetkisi gerekmez). |
| `scripts/baslat-arka-plan.ps1` | İzleyiciyi gizli, bağımsız bir süreç olarak başlatır (kapanan konsoldan etkilenmez). |
| `scripts/baslangica-cikar.ps1` | Acilis kisayolunu kaldırır. |
| `scripts/dur.cmd` | Çalışan otomatik guncellemeyi durdurur. |

### Kullanım

```powershell
# Sürekli çalışan arka plan modu (varsayılan 5 dakikada bir kontrol):
powershell -ExecutionPolicy Bypass -File scripts\otomatik-guncelleme.ps1

# Bir kez çalıştır:
powershell -ExecutionPolicy Bypass -File scripts\otomatik-guncelleme.ps1 -TekGecis

# Açılışta otomatik başlasın:
powershell -ExecutionPolicy Bypass -File scripts\baslangica-ekle.ps1
```

Parametreler: `-AralikSaniye 300` (kontrol aralığı, varsayılan 300 sn = 5 dk),
`-ElleMesaj "metin"` (commit mesajı), `-TekGecis` (tek seferlik).

> **Neden 5 dakika?** 15 saniyede bir commit, 20 dakikada ~80 commit üretiyor;
> commit geçmişi okunmaz hâle geliyor ve GitHub Pages build'leri üst üste
> biniyor (biri `cancelled` olarak görünüyor). 5 dakika hem yeterince hızlı
> hem de geçmişi temiz tutuyor.

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
| `sitemap.xml` | 3 URL: `/`, `/?lang=en`, `/?lang=ar` — her birinde kendi kendine + karşılıklı `hreflang` |
| `index.html` head | `hreflang` (tr/en/ar/x-default), `og:locale`, `og:image` (**1200×630**), `summary_large_image`, **JSON-LD Person** (isim, unvan, `knowsAbout`) |
| `script.js` | `?lang=en\|ar` ile sayfa o dile açılır; dil değişince adres çubuğu **ve `canonical`** birlikte güncellenir → `hreflang` ile aynı adresler |
| `og.png` · `favicon.ico` · `apple-touch-icon.png` · `icon-*.png` · `site.webmanifest` | Paylaşım kartı, sekmelerde/ana ekranda ikon, PWA ikonları (192–512, `any` + `maskable`), site adı ve tema rengi (`display: standalone`) |

```text
https://engmumin.work.gd/            ← Türkçe (varsayılan, x-default)
https://engmumin.work.gd/?lang=en    ← İngilizce
https://engmumin.work.gd/?lang=ar    ← Arapça
```

> **İlk ziyaret:** Ana sayfadan `dil.html`'e **yönlendirme yok** (yönlendirme hem ilk
> boyayı engelliyordu hem de Google'ı `noindex` bir sayfaya gönderiyordu). Dil seçimi,
> ana sayfanın üzerinde açılan katmanla (`#dilSec`) sorulur; seçim `localStorage`'a
> yazılır, adres **değişmez**. Altbilgideki “Dil değiştir” bağlantısı klasik seçim
> sayfasını (`dil.html`) açar.

### Görselleri yeniden üretme

`og.png`, `apple-touch-icon.png`, `favicon.ico` ve dört PWA ikonu
(`icon-192/512.png`, `icon-maskable-192/512.png`) tek betikten gelir — metni
değiştirmek için betiği düzenleyin, elle Paint ile değil:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts\gorsel-uret.ps1
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
   - JS'ten çağrılan anahtarlar da kullanılmış sayılır (`durumYaz("form.done")`
     gibi — böylece “kullanılmayan anahtar” uyarısı false-positive vermez),
   - `<title>`, `charset`, `viewport`, `lang`, yinelenen `id`, `<img alt>` denetimi,
   - `canonical` == `og:url`, `hreflang` kümesi tam mı (tr/en/ar/x-default),
   - `sitemap.xml` yolları gerçek dosyalara mı (**`404.html` sitemap'te olamaz**),
   - `robots.txt` `Sitemap:` satırı kendi domainimiz mi,
   - `og:image` dosyası depoda var mı,
   - `site.webmanifest` geçerli mi, ikonları var mı, `display: standalone`
     için 192 **ve** 512 px ikon tanımlı mı (PWA kurulabilirliği),
   - `sw.js` ↔ `script.js` `serviceWorker.register` tutarlılığı,
   - ardından dosyaları yerel sunucuda açıp `/`, `/dil.html`, `/404.html`,
     `/robots.txt`, `/sitemap.xml` 200 döner mi diye bakar.
   (Yeni kontrollerin gerçekten çalıştığı `scripts\denetle-negatif.py` ile
   **8 negatif testte** doğrulanır — betik önce izleyicinin çalışıp
   çalışmadığına bakar, dosyaları bayt düzeyinde geri alır.)
2. **Lighthouse CI** — `lighthouserc.json` eşikleri:
   erişilebilirlik / SEO / iyi uygulamalar ≥ **0.9** (hata), performans ≥ 0.7 (uyarı).
   Raporlar iş akışı artifacts'inde saklanır.
   - `dil.html` ve `404.html` bilerek `noindex` olduğundan Lighthouse'un
     `is-crawlable` denetimi bu ikisinde kasıtlı olarak düşüktür; `assertMatrix`
     ile bu sayfalarda SEO eşiği 0.6'a çekilir (diğer denetimler tam puan).
   - Chrome sürümü iş akışında **140**'a sabitlenir (Lighthouse ile uyumluluk).

Yerelde de aynı denetimi çalıştırabilirsiniz:

```powershell
python scripts\denetle.py
```

> **Dal koruması AÇIK.** Repo → *Settings → Branches* → `main` için
> *"Require status checks to pass before merging"* → `Depo bütünlüğü` ve
> `Lighthouse denetimi` işaretli (`strict` kapalı, yöneticiler dahil).
>
> - Başkası PR açtığında / kolaboratör eklendiğinde bu iki iş geçmeden
>   birleştirme **imkânsız** — hatalı sürüm yayınlanamaz.
> - Kuvvetli push ve dal silme **kapalı** (geçmişi bozamazsınız).
> - **Otomatik güncelleme sistemi etkilenmez:** push'u depo sahibi (yönetici)
>   yaptığı için GitHub kuralı *bypass* eder; log'da şu satır görülür:
>   `Bypassed rule violations for refs/heads/main - 2 of 2 required status
>   checks are expected`. İzleyicinin 300 sn aralığı, CI süresinden (~140 sn)
>   uzun olduğu için zaten nadiren de olsa beklemesi gerekmez.

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
