//1- kENDİSİNE GÖNDERİLEN KELİMEYİ BELİRTİLEN KEZ EKRANA yazan fonksiyon yazınız.

function fonksiyon1(kelime,tekrar){
    for(let i =0; i<tekrar; i++)
    {
        console.log(kelime);
    }
}

//fonksiyon1("Halil",5);

//2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız

function fonksiyon2(kısakenar, uzunkenar){
    let alan = kısakenar*uzunkenar;
    let cevre = (kısakenar+uzunkenar)*2;

    return `alan: ${alan} çevre: ${cevre}`
}

let sonuc = fonksiyon2(7,10);
//console.log(sonuc);


// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız

function yaziTura(){
    let random = Math.random();  // 0-1 arası sayı üretir
    if(random>0.5){
        console.log("yazı");
    }
    else{
        console.log("tura");
    }
}

//yaziTura();
//yaziTura();
//yaziTura();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyon yazınız

function tamBolen(sayi){
    let dizi = [];

    for(let i =0; i<=sayi; i++){
        if(sayi%i==0){
            dizi.push(i);
        }
    }
    console.log(dizi);

}

tamBolen(20);


