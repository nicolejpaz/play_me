var context = new webkitAudioContext()
oscillator = context.createOscillator()
oscillator.connect(context.destination)

oscillator.frequency.value = 0
oscillator.noteOn(0)

$(document).on('keydown', function(event) {
  play(oscillator, event.keyCode)
})
