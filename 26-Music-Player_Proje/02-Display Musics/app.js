//3-
const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector(".music-details .title");
const singer = document.querySelector(".music-details .singer");
const prev = document.querySelector(".controls #prev");
const play = document.querySelector(".controls #play");
const next = document.querySelector(".controls #next");


const player = new MusicPlayer(musicList);

let music =player.getMusic();

//4-
window.addEventListener("load",() => {
    let music =player.getMusic();
    displayMusic(music);
});

//5-
function displayMusic(music){
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "../img/"+ music.img;
    audio.src = "../mp3/"+ music.file;
}

//6-
play.addEventListener("click", function(){
    audio.play();
});

