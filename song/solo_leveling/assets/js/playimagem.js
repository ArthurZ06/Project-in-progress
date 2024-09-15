// Add a click event listener to the image
image.addEventListener('click', function() {
    // Check if the audio is paused, then play it
    if (audio.paused) {
        audio.play();
    } else {
        // If the music is already playing, pause it
        audio.pause();
    }
});


play.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
})