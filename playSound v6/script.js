class AudioRouter {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.oscillator = null;
        this.isPlaying = false;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('startStop').addEventListener('click', () => {
            if (this.isPlaying) {
                this.oscillator.stop();
                this.oscillator = null;
                this.isPlaying = false;
            } else {
                this.oscillator = this.audioContext.createOscillator();
                this.oscillator.connect(this.audioContext.destination); // Connessione all'output
                this.oscillator.start();
                this.isPlaying = true;
            }
        });
    }
}

window.addEventListener('load', () => {
    const router = new AudioRouter();
});