const fromLang = document.getElementById("from-lang");
const toLang = document.getElementById("to-lang");

for(let lang in languages){
    let option = `<option value="${lang}">${languages[lang]}</option>`;
    fromLang.insertAdjacentHTML("beforeend",option);
    toLang.insertAdjacentHTML("beforeend",option);

    fromLang.value ="tr-TR";
    toLang.value ="en-GB"
}