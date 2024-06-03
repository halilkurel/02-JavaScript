var ürünAdi= "iphone13";  //string
var urunFiyat = 1500; //number

console.log(typeof ürünAdi)
console.log(typeof urunFiyat)

let sayi1= "10";
let sayi2= "20";

console.log(sayi1+sayi2); //Sonuç : 1020 dir. String toplar.
console.log(Number(sayi1)+ Number(sayi2)); // Number olarak toplar . Somuç 30 dur.


let sayi3 = 10;
let sayi4 =40;

console.log(sayi3.toString()+ sayi4.toString());  //String olarak toplar.. Sonuç : 1040'dır.



let not = 40;
let basarilimi = (not>=50);
console.log(basarilimi);    //sonuç: false
console.log(typeof basarilimi); //sonuç: boolean


let yas;
console.log(yas);   // sonuç:undefined
console.log(typeof yas);    // sonuç:undefined