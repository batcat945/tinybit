input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        1394,
        5000,
        255,
        0,
        500,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        basic.showString("Hello!")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
	
})
