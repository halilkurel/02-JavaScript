

function Soru(soruMetni, cevapSeçenekleri, doğruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSeçenekleri = cevapSeçenekleri;
    this.doğruCevap = doğruCevap;
}

Soru.prototype.cevabıKontrolEt = function (cevap) {
    return cevap = this.doğruCevap
}


let sorular = [
    new Soru("Hangisi JS paket yönetim uygulamasıdır?", { a: 'Node.js', b: 'Typescript', c: 'Npm' }, 'c'),
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




document.querySelector('.btn_start').addEventListener('click', function () {
    if (quiz.sorular.length != quiz.soruIndex) {
        /*10-Starta tıklandığında active clasının quiz_box ın yanına eklenmesi*/
        document.querySelector('.quiz_box').classList.add('active');

        console.log(quiz.SoruGetir());
        quiz.soruIndex += 1;
    } else {
        console.log("Soru Bitti");
    }

})

