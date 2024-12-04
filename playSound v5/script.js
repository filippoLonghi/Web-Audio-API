let audioContext;
let oscillator;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

startButton.addEventListener('click', initAudio);
stopButton.addEventListener('click', stopAudio);

async function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        oscillator = audioContext.createOscillator();
        oscillator.connect(audioContext.destination);
        oscillator.start();
    } catch (error) {
        console.error('Error initializing audio:', error);
        alert('Error initializing audio system');
    }
}

function stopAudio() {
    if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
    }
    if (audioContext) {
        audioContext.close();
    }
}
