c = new AudioContext()

function playWhiteNoise() {
    
    var bs = c.createBufferSource();
    bs.connect(c.destination);

    var buf = c.createBuffer(1, c.sampleRate*2, c.sampleRate);
    var dataBuffer = buf.getChannelData(0);
    for (var i=0; i < dataBuffer.length; i += 1) {
         dataBuffer[i] = Math.random()
        };
    bs.buffer = buf;
    bs.start()

}