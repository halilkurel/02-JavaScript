let sayilar = [1,5,8,15,3,25];

// 1- sayılar listesinin her bir elemanının karesini yazdırınız.

for (let i =0; i<sayilar.length; i++){
    let sayi = Math.pow(sayilar[i],2);
    console.log(sayi)
} 


// 2- Sayılar listesindeki hangisayılar 5 in katıdır?

for(let i in sayilar){
    if(sayilar[i]%5==0){
        console.log(sayilar[i]);
    }
}

// 3- sayılar listesindeki çift sayıların toplamını bulunuz.


let toplam =0;

for (let i in sayilar){
    if(sayilar[i]%2==0){
        toplam+=sayilar[i];
    }
}

console.log(toplam);




let ürünler = ["iphone 12","samsung s22","iphone 13","samsung s23"]

// 4- Ürünler listesindeki tüm ürünleri büyük harf ile yazdır

for (let ürün of ürünler){
    console.log(ürün.toUpperCase());
}


//5 -ürünler listesinde içinde samsung geçen kaç ürün vardır?
let s =0;
for(let i in ürünler){
    if(ürünler[i].includes("samsung")){
        s++;
    }
}
console.log(s)

