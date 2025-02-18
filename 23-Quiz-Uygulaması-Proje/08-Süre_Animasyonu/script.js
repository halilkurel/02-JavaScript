const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
    /*5- */
    startTimerLine();

    startTimer(10);
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
});


ui.btn_next.addEventListener("click", function () {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        clearInterval(counter);
        /*6- */
        clearInterval(counterLine);
        startTimerLine();

        startTimer(10);
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    } else {
        clearInterval(counter);

        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});


ui.btn_quit.addEventListener("click", function () {
    window.location.reload();
});


ui.btn_replay.addEventListener("click", function () {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");

});

function optionSelected(option) {
    clearInterval(counter);
    /*7- */
    clearInterval(counterLine);
    
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if (soru.cevabiKontrolEt(cevap)) {
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");
}



let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);   /* setInterval her 1 saniyede bir timer ı çağırır */

    function timer() {
        ui.time_second.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter); /* süre geriye doğru giderken - sayılara düşmesini kapattık. Yani setInterval'ı sıfırladık */
            ui.time_text.textContent = "Süre bitti";

            let cevap = quiz.soruGetir().dogruCevap;

            for (let option of ui.option_list.children) {
                if (option.querySelector("span b").textContent == cevap) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
            }
            ui.btn_next.classList.add("show");
        }
    }
}

/*4- */
let counterLine;
function startTimerLine(){
    let line_width =0;
    counterLine = setInterval(timer,10);

    function timer(){
        line_width +=0.5;
        ui.time_line.style.width = line_width + "px";
        if(line_width>548){
            clearInterval(counterLine)
        }
    }

}
