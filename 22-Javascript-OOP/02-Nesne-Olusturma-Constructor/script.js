

// let soru = {
//     soruMetni: "Hangisi JS paket yönetim uygulamasıdır?",
//     cevapSeçenekleri: {
//         a: 'Node.js',
//         b: 'Typescript',
//         c: 'Npm'
//     },
//     doğruCevap: 'c',
//     cevabiKontrolEt: function (cevap) {
//         return cevap === this.doğruCevap;
//     }
// }

let sorular = [
    new Soru("Hangisi JS paket yönetim uygulamasıdır?", {a: 'Node.js',b: 'Typescript',c: 'Npm'},'c'),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır?", {a: 'Node.js',b: 'Nuget',c: 'Npm'},'b')
]


function Soru(soruMetni, cevapSeçenekleri, doğruCevap, kontrol) {
    this.soruMetni = soruMetni;
    this.cevapSeçenekleri = cevapSeçenekleri;
    this.doğruCevap = doğruCevap;
    this.kontrol = function(cevap){
        return cevap === this.doğruCevap
    }
}

let i =0;
for(let s of sorular){
    i++;
    console.log(`${i}. Soru: `+s.soruMetni);
    console.log(s.cevapSeçenekleri);
    console.log(s.kontrol('c'));

}
