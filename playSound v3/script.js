buttonEl = document.querySelector('button');

c = new AudioContext();

function main() {
    o = c.createOscillator();
    o.connect(c.destination);
    o.start();
    o.stop(c.currentTime + 2);
    
}

buttonEl.addEventListener('click', function() {
    // if the audio context is not running, resume it by clicking the button
    if (c.state !== 'running') {
        c.resume();
    }
    main();
});