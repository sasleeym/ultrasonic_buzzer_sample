music.setVolume(255)
music.stopAllSounds()
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) > 5) {
        music.changeTempoBy(100)
        music.ringTone(988)
        music.ringTone(349)
    } else {
        music.ringTone(131)
    }
})
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
})
