function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    /*11- */
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),

    this.quiz_box = document.querySelector(".quiz_box"),
    this.option_list = document.querySelector(".option_list"),
    /*7- */
    this.score_box = document.querySelector(".score_box"),

    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
    
};

UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri) {
        options += 
            `
                <div class="option"> 
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
    }
    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");
   
    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.soruSayisiniGoster = function(soruSirasi,toplamSoru){
    let tag = `<span class="badge bg-warning">${soruSirasi}/${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}


/*10- */
UI.prototype.skoruGoster = function(toplamSoru, doğruCevap){
    let tag = `Toplam ${toplamSoru} sorudan ${doğruCevap} doğru cevap verdiniz`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}