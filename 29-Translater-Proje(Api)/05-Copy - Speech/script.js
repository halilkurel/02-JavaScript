const fromLang = document.getElementById("from-lang");
const toLang = document.getElementById("to-lang");

//buton,text metinlerini alalım
const btnTranslate = document.getElementById("btnTranslate");
const fromText = document.getElementById("from-text");
const toText =document.getElementById("to-text");

//exchange ' e ulaşalım
const exchange = document.querySelector(".exchange");

//1- Icon'lara ulaşalım
const icons = document.querySelectorAll(".icons");



for(let lang in languages){
    let option = `<option value="${lang}">${languages[lang]}</option>`;
    fromLang.insertAdjacentHTML("beforeend",option);
    toLang.insertAdjacentHTML("beforeend",option);

    fromLang.value ="tr-TR";
    toLang.value ="en-GB";
}


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

//exchange e event ekleyelim
exchange.addEventListener("click", () =>{
    let text = fromText.value;
    fromText.value = toText.value;
    toText.value = text;

    let lang = fromLang.value;
    fromLang.value = toLang.value;
    toLang.value = lang;
});


//2-İconlara event ekleyelim
for(let icon of icons){
    icon.addEventListener("click",(element) => {
        //icon'a tıkladığımızda iconun classlist'inde copy var mı?
        if(element.target.classList.contains("fa-copy")){
            //2 tane copy ve ses iconumuz olduğu için id sorgusu yapalım
            //Seçilen textin kopyasını alacağız
            if(element.target.id=="from"){
                navigator.clipboard.writeText(fromText.value);
            }
            else{
                navigator.clipboard.writeText(toText.value);
            }
        }
        else{
            //Seçilen texti okuması işlemi Wep Speech API ile yapacağız
            let utterance;
            if(element.target.id=="from"){
                //Okunacak veriyi seçmek
                utterance = new SpeechSynthesisUtterance(fromText.value);
                //Hangi dilde okunacağını belirlemek
                utterance.lang = fromLang.value;
            }
            else{
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = toLang.value;

            }
            speechSynthesis.speak(utterance);
        }
    });
}