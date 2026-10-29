led.plot(3, 4)
radio.sendString("HELLO USER")
radio.sendString("PLEASE SELECT USER")
radio.sendString("'Liamcirclechen'")
radio.sendString("thats my account   no thats not mine")
radio.sendString("HELLO Liamcirclechen!")
music.setVolume(100)
music.play(music.stringPlayable("F G A F C5 A G C5 ", 150), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("G F D A F E E D ", 150), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("E F G C F G A B ", 150), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("B A G F G - C5 C5 ", 150), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
