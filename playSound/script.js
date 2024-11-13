c = new AudioContext()

function playSound() {
    c.resume()
    o = c.createOscillator();
    o.connect(c.destination);
    o.start()
    setTimeout(function () {o.stop()}, 1000)
}