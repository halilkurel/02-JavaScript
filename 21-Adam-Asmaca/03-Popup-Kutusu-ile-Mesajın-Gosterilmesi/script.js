const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');

//Seçilen kelimenin harfleri burada olacak
const correctLetters = ['j','a','v'];

//Yanlış girilen harfler burada olacak
const wrongLetters = [];

//Rastgele bir veri getitir
function getRandomWord(){
    const words = ['javascript','java','python'];

    return words[Math.floor(Math.random()*words.length)];
}




//Seçilen kelime harflere ayrılarak html'e eklenir
function displayWord(){
    const selectedWord = getRandomWord();

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

displayWord();