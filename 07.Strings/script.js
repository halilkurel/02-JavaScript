let ad = "Halil";
let soyad = "Kürel";
let yas = 69;
let sehir = "Bursa";

let mesaj = "Benim adım " + ad + ". " + "Soyadım " + soyad + ". " + sehir + '\'de yaşıyorum. '
    + "Emekliliğe " + (65 - yas) + " yılım kaldı.";

//backtick
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${65 - yas} yılım kaldı.`

//ternony operatör
let emeklilik = (65 > yas) ? `Emekliliğe ${65 - yas} yıl kaldı ` :
    `${yas - 65} yıl önce emekli oldunuz.`;


mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik}`


console.log(mesaj);