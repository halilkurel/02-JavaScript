let url ="https://www.sadıkturan.com/";
let kursAdi= "Komple Web Geliştirme Kursu";

//1- url kaç karakterlidir?
var sonuc1 = url.length;
console.log(sonuc1);


// 2- kursAdi kaç kelimeden oluşuyor?
var veri = kursAdi.split(" ");
var sonuc2 = veri.length;
console.log(sonuc2);


// 3- url https ile mi başlıyor?

var sonuc3 = url.startsWith("https");
console.log(sonuc3);



// 4- kursAdi içerisinde eğitimi kelimesi var mı?

var sonuc4 = kursAdi.search("Eğitim");
console.log(sonuc4);



// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgisi oluşturunuz.
var kursAdi2 = kursAdi.replace(/ /g,"-");
var data = `${url+kursAdi2.toLocaleLowerCase()}`;
console.log(data);


// https://www.sadıkturan.com/komple-web-geliştirme-kursu