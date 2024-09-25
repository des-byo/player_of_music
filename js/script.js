//Constants for previous, play, and next buttons

const prevButton = document.getElementById("prev-btn");
const playButton = document.getElementById("play-btn");
const nextButton = document.getElementById("next-btn");

//Arrays to store songs, song information, song covers

const audioList = [

    "images/lost-in-city-lights-145038.mp3",
    "images/dm_-_this_time.mp3"    

]

const songTitle = [

    "Lost In The Cities",
    "This Time"

]

const songArtist = [

    "Cosmo Sheldrake" ,
    "Desmond Mudzingwa"

]

const albumCover = [

    "images/cover-1.png",
    "images/desmond_mudzingwa_this_time.png"

]

//const audioI = document.createElement("audio");
//audioI.setAttribute("src", audioList[0]);

const audioI = document.getElementById("audio");
const imageI = document.getElementById("cover-image");

isPlay = false;
nowPlaying = 0;

//Button to play and pause song

playButton.addEventListener("click", () => {

    if (isPlay == true){

        audioI.play();
        playButton.src = "images/pause.svg";

    }

    else {

        audioI.pause();
        playButton.src = "images/Play_fill.svg"; 
            
    }

    isPlay = !isPlay;

});

//Button to play next song, show next artist name, song title, song cover 

nextButton.addEventListener("click", () => {

    nowPlaying = (nowPlaying + 1) % audioList.length;
    audioI.setAttribute("src", audioList[nowPlaying]);
    imageI.setAttribute("src", albumCover[nowPlaying]);

    document.getElementById("song-title").textContent = songTitle[nowPlaying];
    document.getElementById("song-artist").textContent = songArtist[nowPlaying];
    
    if (isPlay) {

    audioI.play();
   
    }

    isPlay = !isPlay;
 
});

//Button to play previous song

prevButton.addEventListener("click", () => {

    nowPlaying = (nowPlaying - 1 + audioList.length) % audioList.length;
    audioI.setAttribute("src", audioList[nowPlaying]);
    imageI.setAttribute("src", albumCover[nowPlaying]);

    document.getElementById("song-title").textContent = songTitle[nowPlaying];
    document.getElementById("song-artist").textContent = songArtist[nowPlaying];

    if(isPlay) {

    audioI.play();

    }

    isPlay=!isPlay;

});








