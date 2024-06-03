// 1- Elma, armut, Muz, Çilek elemanlaına sahip bir dizi oluşturunuz.
let meyveler = ["Elma","Armut","Muz","Çilek"];
let sonuc = meyveler;

// 2-Dizi kaç elemanlıdır?
sonuc = meyveler.length;


// 3- Dizinin ilk ve son elemanı nedir?
let son = meyveler[meyveler.length-1];
let ilk = meyveler[0];

// 4- Elma dizinin bir elemanı mıdır?
sonuc = meyveler.includes("Elma");

// 5- Kiraz ı listenin sonuna ekle.

sonuc = meyveler.push("Kiraz");

// 6- Dizinin son iki elemanını siliniz.

sonuc = meyveler.slice(0,-2);

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını hesaplayınız.
//Not ort hesaplayınız
let ogranci1 = ["Yiğit Bilgi", 2010,[70,60,80]];
let ogrenci2 = ["Ada Bilgi", 2012, [80,80,90]];
let ogrenci3 = ["Ahmet Turan", 2009, [60,60,70]];


//Yaş Hesap
let simdi = new Date();
let yil = simdi.getFullYear();
let yas_1 = yil- ogranci1[1];

//Not hesap

let not_ort= (ogranci1[2][0]+ogranci1[2][1]+ogranci1[2][2])/3


    /*
        Öğrenci 1: Yiğit  Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012 (80,80,90)
        Öğrenci 3: Ahmet Turan 2009 (60,60,70)    
    
    */


console.log(typeof not_ort);
console.log(not_ort);