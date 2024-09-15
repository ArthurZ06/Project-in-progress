// Select the image element
const image = document.getElementById('musicImage');

// Create an audio element
const audio = new Audio('/assets/music/song.mp3');

// controls
const play = document.getElementById('play');
const up = document.getElementById('up');
const down = document.getElementById('down');
const volumeDisplay = document.getElementById('volumeDisplay');
const skip10seg = document.getElementById('skip');
const return10seg = document.getElementById('return');


let volumeLevel = 10;
audio.volume = volumeLevel / 10;

up.addEventListener('click', function() {
    if (volumeLevel < 10 ) {
        volumeLevel++;
        audio.volume = volumeLevel / 10;
        volumeDisplay.textContent = `Volume: ${volumeLevel}`
    }
})

down.addEventListener('click', function() {
    if (volumeLevel > 0 ) {
        volumeLevel--;
        audio.volume = volumeLevel / 10;
        volumeDisplay.textContent = `Volume: ${volumeLevel}`
    }
})

audio.addEventListener('canplaythrough', () => {
    console.log("Audio loaded and ready to play");
});

audio.addEventListener('ended', function() {
    console.log("A Música terminou.");
    play.textContent = 'play';
})


