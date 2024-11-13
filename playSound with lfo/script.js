c = new AudioContext();

lfo = c.createOscillator();
lfo.frequency.value = 20;
lfo.start(); 

function playSound() {
    c.resume(); 
    o = c.createOscillator();
    g = c.createGain();

    o.connect(g);
    g.connect(c.destination);
    lfo.connect(g.gain);

    o.start(); 
}


