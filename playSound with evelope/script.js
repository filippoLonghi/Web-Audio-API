c = new AudioContext()
attack = 0.5
release = 0.5
function playSound () {
    c.resume();
    o = c.createOscillator();
    g = c.createGain();
    o.connect(g)
    g.connect(c.destination);
    g.gain.setValueAtTime(0, c.currentTime)
    g.gain.linearRampToValueAtTime(1, c.currentTime + attack)
    g.gain.linearRampToValueAtTime(0, c.currentTime + attack + release)
    o.start()

}