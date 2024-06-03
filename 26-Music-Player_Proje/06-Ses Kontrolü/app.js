
const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const play = document.querySelector("#controls #play");
const prev = document.querySelector("#controls #prev");
const next = document.querySelector("#controls #next");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");

//3-volume ve volumeBar alınması
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");

const player = new MusicPlayer(musicList);

let music =player.getMusic();


window.addEventListener("load",() => {
    let music =player.getMusic();
    displayMusic(music);
});


function displayMusic(music) {
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "../img/"+ music.img;
    audio.src = "../mp3/"+ music.file;
}



play.addEventListener("click", () =>{
    //containerın classlarında playing var mı varsa pause yoksa play metotunu çağır
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
});

//prev butonu
prev.addEventListener("click", () => {prevMusic();});

const prevMusic =() => {
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

//next butonu
next.addEventListener("click", () => {nextMusic();});

const nextMusic =() => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}



const pauseMusic =() =>{
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
}


const playMusic =() =>{
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();
}



const calculateTime = (toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye / 60);
    const saniye = Math.floor(toplamSaniye % 60);
    //SAniye 10 dan küçükse başına 0 ekle
    const guncellenenSaniye = saniye < 10 ? `0${saniye}`: `${saniye}`;
    const sonuc = `${dakika}:${guncellenenSaniye}`;
    return sonuc;
}

//Müzik Bİlgisinin bilgilerini almak
audio.addEventListener("loadedmetadata", () => {
    //toplam saniyeyi gösterir biz dakika cinsinden göstermesini istiyoruz. Bunun için ilgili metotu yazalım
    duration.textContent = calculateTime(audio.duration);
    //11-Progressbar maxsimum değeri
    progressBar.max = Math.floor(audio.duration);
});

//Geçen süreyi progressbarda göstermek
audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
});




progressBar.addEventListener("input",()=>{
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});


//5-ProgressBardan ses kontrolü için
volumeBar.addEventListener("input", (e)=>{
    const value = e.target.value;
    //ses oranı 0-1 arası verilebilir. Bize progressbardan 100 değeri geliyor
    audio.volume = value/100;
    //sliderın görünümü değişsin
    if(value ==0){
        audio.muted = true;
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";

    }
    else{
        audio.muted= false;
        sesDurumu ="sesli";
        volume.classList = "fa-solid fa-volume-high";

    }
});




//4-volume için event ekleyelim tıklandığında ses açıksa kapansın kapıysa açılsın
let sesDurumu ="sesli";
volume.addEventListener("click",()=>{
    if(sesDurumu==="sesli"){
        audio.muted = true;
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";
        volumeBar.value=0;
    }
    else{
        audio.muted= false;
        sesDurumu ="sesli";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value=100;
    }
});


