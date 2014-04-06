var sustainOn = false

var context = new webkitAudioContext()
oscillator = context.createOscillator()
oscillator.connect(context.destination)

oscillator.frequency.value = 0
oscillator.noteOn(0)

$(document).on('keydown', function(event) {
  if (event.keyCode === 16) {
    sustainOn = true
  }

  play(oscillator, event.keyCode)
})

$(document).on('keyup', function(event) {
  var sustainIsChecked = $('#sustain').is(":checked")
  var shiftDown = event.keyCode === 16

  if (!sustainIsChecked && !sustainOn) {
    oscillator.frequency.value = 0
  }

  if (shiftDown) {
    sustainOn = false

    if (!sustainIsChecked) {
      oscillator.frequency.value = 0
    }
  }
})
