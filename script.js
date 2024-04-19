// Define the white and black keys
const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const BLACK_KEYS = ['r', 't', 'y', 'u', 'i'];

// Get all keys
const keys = document.querySelectorAll('.key');
const blackKeys = document.querySelectorAll('.key.black');
const whiteKeys = document.querySelectorAll('.key.white');

// Function to play music
function playMusic(note) {
    const audio = document.getElementById(note);
    audio.currentTime = 0; // Reset audio to start
    audio.play();
}

// Add click event listeners to keys
keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.dataset.note;
        playMusic(note);
    });
});

// Add keydown event listener to play keys using keyboard
document.addEventListener('keydown', e => {
    if (e.repeat) return; // Ignore repeated keydown events
    const key = e.key.toLowerCase();
    if (WHITE_KEYS.includes(key) || BLACK_KEYS.includes(key)) {
        const note = document.querySelector(`[data-note="${key.toUpperCase()}"]`);
        if (note) playMusic(note.dataset.note);
    }
});
