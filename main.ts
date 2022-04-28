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
    ) < 5) {
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
	
})
