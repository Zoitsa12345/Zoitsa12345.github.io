// Get all keys
const keys = document.querySelectorAll('.white-key, .black-key');

// Add click event listener to each key
keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        playAudio(note);
    });
});

// Function to play audio
function playAudio(note) {
    const audio = document.getElementById(note);
    if (audio) {
        audio.currentTime = 0; // Reset audio to start
        audio.play();
    }
}
