c = new AudioContext();

function main() {
    c.resume();
    o = c.createOscillator();
    o.connect(c.destination);
    o.start();
}

function stop() {
    c.suspend();
}