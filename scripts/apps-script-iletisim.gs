/*
 * engmumin.work.gd — iletişim formu uç noktası
 * (Google Apps Script · Web uygulaması · ücretsiz)
 *
 * KURULUM
 *   1. https://script.google.com → yeni proje → Code.gs içine bu dosyayı yapıştırın.
 *   2. Üstteki ALICI satırını kendi e-posta adresinizle değiştirin.
 *   3. Düzenleyicide ilk kez "kur" fonksiyonunu bir kez Çalıştır ile çalıştırın
 *      (bir kez izin/Yetkilendirme sorar). Böylece "Mesajlar" tablosu oluşur.
 *   4. Dağıt → Uygulama için dağıt → Web uygulaması:
 *        Bu uygulamaya kimler erişebilir : Herkes
 *        Kullanım                        : Herkes
 *      Verilen ".../exec" adresini kopyalayıp script.js içindeki FORM_URL değerine yapıştırın.
 *   5. Kodu sonradan değiştirirseniz DAĞIT → Uygulama için dağıt →
 *      sürüm seçin (yeni sürüm oluşturun); eski adres çalışmaya devam eder.
 *
 * GELEN İSTEK (script.js, mode: "no-cors", Content-Type: text/plain)
 *   { ad, posta, mesaj, site, dil }
 */

const ALICI = "ALICI_ADRESI@gmail.com";   // <<< mesajların düşeceği kutu
const KONU = "engmumin.work.gd";

/* ---------------- ilk kurulum: tabloyu oluştur ---------------- */
function kur() {
  const ss = SpreadsheetApp.create(KONU + " — mesajlar");
  const sh = ss.getSheets()[0];
  sh.setName("Mesajlar");
  sh.appendRow(["Tarih", "Ad", "E-posta", "Dil", "Sayfa", "Mesaj"]);
  sh.setFrozenRows(1);
  PropertiesService.getScriptProperties().setProperty("SS_ID", ss.getId());
  Logger.log("Mesaj tablosu: " + ss.getUrl());
}

/* ---------------- tabloyu bul, yoksa kendiliğinden kur ---------------- */
function tablo() {
  const id = PropertiesService.getScriptProperties().getProperty("SS_ID");
  if (!id) {
    kur();
    return tablo();
  }
  const ss = SpreadsheetApp.openById(id);
  return ss.getSheetByName("Mesajlar") || ss.insertSheet("Mesajlar");
}

/* ---------------- basit hız sınırı (IP Apps Script'te görünmez) ---------------- */
function sinir(anahtar, adet, dakika) {
  const onbellek = CacheService.getScriptCache();
  const mevcut = parseInt(onbellek.get(anahtar) || "0", 10);
  if (mevcut >= adet) return false;
  onbellek.put(anahtar, String(mevcut + 1), dakika * 60);
  return true;
}

function yanit(ok, mesaj) {
  return ContentService.createTextOutput(JSON.stringify({ ok: ok, mesaj: mesaj }))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ---------------- gelen mesaj ---------------- */
function doPost(e) {
  let v;
  try {
    v = JSON.parse((e && e.postData && e.postData.contents) || "{}");
  } catch (hata) {
    return yanit(false, "geçersiz istek");
  }

  const ad = String(v.ad || "").trim().slice(0, 120);
  const posta = String(v.posta || "").trim().slice(0, 200);
  const mesaj = String(v.mesaj || "").trim().slice(0, 5000);
  const site = String(v.site || "").slice(0, 500);
  const dil = ["tr", "en", "ar"].indexOf(v.dil) >= 0 ? v.dil : "tr";

  /* istemci tarafındaki doğrulamayı burada da tekrarla
     (form doğrudan /exec adresine de gönderilebilir) */
  if (ad.length < 2 || mesaj.length < 5 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(posta)) {
    return yanit(false, "alanlar eksik");
  }

  /* bot kapanı: aynı adresten 10 dakikada 3, genelde 8 mesaj */
  if (!sinir("posta/" + posta.toLowerCase(), 3, 10)) return yanit(false, "çok sık");
  if (!sinir("genel", 8, 10)) return yanit(false, "çok sık");

  /* tabloya yaz — tablo olmasa bile e-posta gitsin diye hata yutulur */
  try {
    tablo().appendRow([new Date(), ad, posta, dil, site, mesaj]);
  } catch (hata) {
    Logger.log("tablo yazma hatası: " + hata);
  }

  MailApp.sendEmail({
    to: ALICI,
    subject: KONU + " — yeni mesaj (" + dil + ")",
    replyTo: posta,                      // "Yanıtla" doğrudan yazana gider
    body:
      "Ad     : " + ad + "\n" +
      "E-posta: " + posta + "\n" +
      "Dil    : " + dil + "\n" +
      "Sayfa  : " + site + "\n\n" +
      mesaj,
  });

  return yanit(true, "tamam");
}

/* uç noktanın ayakta olduğunu görmek için: adresi tarayıcıda açın */
function doGet() {
  return yanit(true, "iletişim uç noktası çalışıyor");
}
