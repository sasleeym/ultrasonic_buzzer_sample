basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    ))
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    ) < 5) {
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
	
})
