//5-
const player = new MusicPlayer(musicList);

let music =player.getMusic();


//6-
console.log(music.getName());
player.next();
music =player.getMusic();
console.log(music.getName());
player.next();
music =player.getMusic();
player.next();
console.log(music.getName());
music =player.getMusic();
console.log(music.getName());
