

let soru = {
    soruMetni:"Hangisi JS paket yönetim uygulamasıdır?",
    cevapSeçenekleri:{
        a:'Node.js',
        b:'Typescript',
        c:'Npm'
    },
    doğruCevap:'c',
    cevabiKontrolEt: function(cevap){
        return cevap === this.doğruCevap;
    }
}

console.log(soru.soruMetni);
console.log(soru.cevabiKontrolEt('c'));