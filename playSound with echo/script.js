c = new AudioContext();

d = c.createDelay();

d.delayTime.value = 1 ;

dg = c.createGain();
dg.gain.value = 0.5;
d.connect(dg);
dg.connect(d);
d.connect(c.destination);

function playSound() {
    c.resume();
    o = c.createOscillator();
    g = c.createGain();
    o.connect(g);
    g.connect(d);
    o.start();
    setTimeout(function() { o.stop(); }, 1000*d.delayTime.value );
}