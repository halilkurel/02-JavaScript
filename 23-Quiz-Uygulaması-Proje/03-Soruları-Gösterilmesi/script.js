

function Soru(soruMetni, cevapSeçenekleri, doğruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSeçenekleri = cevapSeçenekleri;
    this.doğruCevap = doğruCevap;
}

Soru.prototype.cevabıKontrolEt = function (cevap) {
    return cevap = this.doğruCevap
}


let sorular = [
    new Soru("Hangisi JS paket yönetim uygulamasıdır?", { a: 'Node.js', b: 'Typescript', c: 'Npm', d: 'Nuget' }, 'c'),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır?", { a: 'Node.js', b: 'Nuget', c: 'Npm' }, 'b'),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır?", { a: 'Node.js', b: 'Nuget', c: 'Npm' }, 'b'),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır?", { a: 'Node.js', b: 'Nuget', c: 'Npm' }, 'b'),
];

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.SoruGetir = function () {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);



/* 6- Bazı düzenleme işlemleri yapalım */
document.querySelector('.btn_start').addEventListener('click', function () {
        document.querySelector('.quiz_box').classList.add('active');
        /*1-soru değişkeni oluşturuyoruz*/
        let soru = quiz.SoruGetir();
        /*3- soruGosteri çağralım */
        soruGoster(soru);

});


/*5-Sonraki soruya gitmek*/
document.querySelector(".next_btn").addEventListener("click", function(){
    if (quiz.sorular.length != quiz.soruIndex+1) {
        quiz.soruIndex += 1;
        soruGoster(quiz.SoruGetir());
        
    } else {
        console.log("Soru Bitti");
    }
});


/* 2- soru ve cevapları çekip gösterebileceğimiz bir foksiyon*/
function soruGoster(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = ``;
    for (let cevap in soru.cevapSeçenekleri){
        options += 
            `
                <div class="option">
                    <span><b>${cevap}</b>: ${soru.cevapSeçenekleri[cevap]}</span>
                </div>
            `;
    }

    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = options;
}