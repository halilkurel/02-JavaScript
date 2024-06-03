const fromLang = document.getElementById("from-lang");
const toLang = document.getElementById("to-lang");

//2-buton,text metinlerini alalım
const btnTranslate = document.getElementById("btnTranslate");
const fromText = document.getElementById("from-text");
const toText =document.getElementById("to-text");



for(let lang in languages){
    let option = `<option value="${lang}">${languages[lang]}</option>`;
    fromLang.insertAdjacentHTML("beforeend",option);
    toLang.insertAdjacentHTML("beforeend",option);

    fromLang.value ="tr-TR";
    toLang.value ="en-GB";
}

//3-
btnTranslate.addEventListener("click", () =>{
    //text' e girilen value bilgisinin alalım
    let text = fromText.value;
    //seçilen dilleri alalım
    let from = fromLang.value;
    let to = toLang.value;

    //İlgili siteden api adresini alalım vew dinamik hale getiralim
    //const url = "https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=en|it";
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;

    //url yi fetch ile gönderiyoruz
    fetch(url)
        //url'den bir cevap gelecek gelen cevabı json'a çevirelim
        .then(res => res.json())
        //
        .then(data => {
            toText.innerHTML=data.responseData.translatedText;
        });

    
});
