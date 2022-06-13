basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) > 0) {
    	
    } else {
    	
    }
})
basic.forever(function () {
    music.setVolume(255)
    music.playTone(880, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(988, music.beat(BeatFraction.Half))
})
