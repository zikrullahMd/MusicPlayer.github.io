const play = document.getElementById("play");
const audio = document.querySelector("audio");
const image = document.querySelector("img");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

const songs = [
    {
    name : 'music-1',
    title : 'Radioactive',
    artist : 'Imagin Dragons'
    },
    {
        name : 'music-2',
        title : 'Mirror',
        artist : 'Bruno Mars'
    },
    {
        name : 'music-3',
        title : 'Mandala',
        artist : 'KSHMR'
    },
    {
        name : 'music-4',
        title : 'The Spook',
        artist : "KSHMR"
    },
    {
        name : 'music-5',
        title : 'Go Hard or go Home',
        artist : "Wiz Khalifa"
    },
    {
        name : 'music-6',
        title : 'Bailando',
        artist : "Sean Paul"
    },
    {
        name : 'music-7',
        title : 'Bigger',
        artist : "Akon"
    },
    {
        name : 'music-8',
        title : 'The Gun',
        artist : "Cash Cash"
    },
    {
        name : 'music-9',
        title : 'Dimaag Kharab',
        artist : "Ismart Shankar"
    },
    {
        name : 'music-10',
        title : 'My House',
        artist : "Flo Rida"
    }
];
let isPlaying = false;
const playMusic = () =>{
    isPlaying = true;
    audio.play();
    play.classList.replace('fa-play','fa-pause');
    image.classList.add('anime');
}
const pauseMusic = () =>{
    isPlaying = false;
    audio.pause();
    play.classList.replace('fa-pause','fa-play');
    image.classList.remove('anime');
}
play.addEventListener('click',()=>{
    isPlaying ? pauseMusic() : playMusic();
});
const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    audio.src = "music/"+songs.name+".mp3";
    image.src = "images/"+songs.name+".jpg";
}


//loadSong(songs[0]);

songIndex = 0;

const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);

