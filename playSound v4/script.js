let audioContext;
try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
} catch (e) {
    console.error('Web Audio API is not supported in this browser');
}

let oscillator = null;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

startButton.addEventListener('click', () => {
    if (oscillator === null) {
        oscillator = audioContext.createOscillator();
        oscillator.connect(audioContext.destination);
        oscillator.start();
    }
});

stopButton.addEventListener('click', () => {
    if (oscillator !== null) {
        oscillator.stop();
        oscillator = null;
    }
});

