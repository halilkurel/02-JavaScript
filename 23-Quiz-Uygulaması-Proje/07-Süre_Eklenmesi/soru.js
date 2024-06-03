function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Hangisi .Net Paketidir?", { a: "Node.js", b: "AutoMapper", c: "Npm" }, "c"),
    new Soru("3-Hangisi frontend içeriğidir?", { a: "css", b: "Typescript", c: "Npm" , d: "Nuget" }, "a"),
    new Soru("4-Hangisi backend paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Nuget" }, "c")
];