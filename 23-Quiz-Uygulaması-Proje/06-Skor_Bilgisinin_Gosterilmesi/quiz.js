function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
    /*1-Doğru cevap sayısını tutacak değişkeni oluşturalım */
    this.dogruCevapSayisi= 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}

