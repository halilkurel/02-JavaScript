// 1- Bir  Sayının 10-50 arasında olup olmadığını kontrol ediniz.
let a=49;
let kontrol;

if(a>10 && a<50)
{
    kontrol =true;
}
else{
    kontrol=false;
}

console.log(kontrol);

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz

let b = -11;
let kalan = b%2;
let kontrol2;
if(b>0 && kalan==1){
    kontrol2=true;
}
else{
    kontrol2=false;
}

console.log(kontrol2);


// 3- x, y, z sayılarının büyüklük karşılaştırmalarını yapınız
let x=5;
let y=10;
let z = 15;

if(x > y && x > z)
{
    console.log("x büyüktür");
}
if(y > x && y > z)
{
    console.log("y büyüktür");
}
if(z > x && z > y)
{
    console.log("z büyüktür");
}

// 4- 2 vize (40%) ve 1 final (60%) notuna göre hesaplanan ortalama için ;

let vize1=40;
let vize2=40;
let final=65;
let durum;
let ort= (((vize1+vize2)/2)*0.4)+ final*0.6;


    //a- Eğer ortalama 50 ve üzerindeyse geçti değilse kaldı
    if(ort>=50)
    {
        durum="Geçti";
    }
    else
    {
        durum="Kaldı"
    }
    console.log(durum+" Ortalama:"+ ort);


    //b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır
    if(ort>=50 && final>=50){
        durum="Geçti";
    }
    else{
        durum= "Kaldı";
    }
    console.log(durum+" Final:"+ final);
    

    //c- Finalden 70 aldığında ortalama 50 nin altında olsa bile dersten geçilsin

    if(final>=70){
        durum="GEçti Final Notu ile";
    }
    else if(ort>=50 && final>=50){
        durum="Geçti, Ortalama ile";
    }
    else{
        durum= "Kaldı";
    }
    console.log(durum+" Final:"+ final);
