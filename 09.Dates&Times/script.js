let simdi = new Date();

//Get Methods
sonuc =simdi;
sonuc = simdi.getDate();  //gün
sonuc = simdi.getDay();     //0 : pazar 6: cumartesi
sonuc = simdi.getFullYear();    //yıl
sonuc = simdi.getHours();   //saat


//set Methods
simdi.setFullYear(2025);
sonuc = simdi.getMonth();

//Örnek
let dogum = new Date(1995,1,10);
let milisn = simdi-dogum;
let saniye = milisn/1000;
let dakika = saniye/60;
let saat = dakika/60;
let gun = saat/24;
let ay = gun/30;
let yıl = ay/12



sonuc = yıl; 



console.log(sonuc);
console.log(typeof sonuc);