c = new AudioContext()

function playSound() {
    
    var bs = c.createBufferSource();

    var buf = c.createBuffer(1, c.sampleRate*2, c.sampleRate);

    var dataBuffer = buf.getChannelData(0);
    
    for (var i=0; i < dataBuffer.length; i += 1) {
         dataBuffer[i] = Math.sin(0.1*i)
        };

    bs.buffer = buf;
    bs.connect(c.destination);
    bs.start()

}