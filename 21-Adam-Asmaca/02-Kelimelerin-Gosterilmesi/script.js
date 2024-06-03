const word_el = document.getElementById('word');

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
        console.log('Bildiniz.')
    }

    
}

displayWord();