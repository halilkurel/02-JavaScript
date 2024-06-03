const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');



//Seçilen kelimenin harfleri burada olacak
const correctLetters = [];

//Yanlış girilen harfler burada olacak
const wrongLetters = [];

const selectedWord = getRandomWord();

//Rastgele bir veri getitir
function getRandomWord(){
    const words = ['javascript','java','python'];

    return words[Math.floor(Math.random()*words.length)];
}




//Seçilen kelime harflere ayrılarak html'e eklenir
function displayWord(){

    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join('')}
    `;

    //Gelen kelime
    const w =word_el.innerText.replace(/\n/g,'');

    //Gelen kelime doğrumu?
    if(w === selectedWord){
        popup.style.display = 'flex';
        message_el.innerHTML = 'Tebrikler kazandınız';
    }

    
}

//Klavyeden glen tuşları kontrol etmek
window.addEventListener('keydown', function(e){
    if(e.keyCode >= 65 && e.keyCode <=90){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();

            }else{
                //bu harfi zaten eklediniz.
            }
        } else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                //hatalı harfleri güncelle
            }
        }
    }
    
});

displayWord();