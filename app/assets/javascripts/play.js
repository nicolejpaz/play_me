
var play = function(oscillator, keyCode) {
  switch (keyCode) {
    case 81:
      console.log('C3')
      oscillator.frequency.value = 130.81
      break
    case 87:
      console.log('C#3/Db3')
      oscillator.frequency.value = 138.59
      break
    case 69:
      console.log('D3')
      oscillator.frequency.value = 146.83
      break
    case 82:
      console.log('D#3/Eb3')
      oscillator.frequency.value = 155.56
      break
    case 84:
      console.log('E3')
      oscillator.frequency.value = 164.81
      break
    case 89:
      console.log('F3')
      oscillator.frequency.value = 174.61
      break
    case 85:
      console.log('F#3/Gb3')
      oscillator.frequency.value = 185.00
      break
    case 73:
      console.log('G3')
      oscillator.frequency.value = 196.00
      break
    case 79:
      console.log('G#3/Ab3')
      oscillator.frequency.value = 207.65
      break
    case 80:
      console.log('A3')
      oscillator.frequency.value = 220.00
      break
    case 219:
      console.log('A#3/Bb3')
      oscillator.frequency.value = 233.08
      break
    case 221:
      console.log('B3')
      oscillator.frequency.value = 246.94
      break
    case 220:
      console.log('C4')
      oscillator.frequency.value = 261.63
      break
    case 65:
      console.log('C#4/Db4')
      oscillator.frequency.value = 277.18
      break
    case 83:
      console.log('D4')
      oscillator.frequency.value = 293.66
      break
    case 68:
      console.log('D#4/Eb4')
      oscillator.frequency.value = 311.13
      break
    case 70:
      console.log('E4')
      oscillator.frequency.value = 329.63
      break
    case 71:
      console.log('F4')
      oscillator.frequency.value = 349.23
      break
    case 72:
      console.log('F#4/Gb4')
      oscillator.frequency.value = 369.99
      break
    case 74:
      console.log('G4')
      oscillator.frequency.value = 392.00
      break
    case 75:
      console.log('G#4/Ab4')
      oscillator.frequency.value = 415.30
      break
    case 76:
      console.log('A4')
      oscillator.frequency.value = 440.00
      break
    case 186:
      console.log('A#4/Bb4')
      oscillator.frequency.value = 466.16
      break
    case 222:
      console.log('B4')
      oscillator.frequency.value = 493.88
      break
    case 90:
      console.log('C5')
      oscillator.frequency.value = 523.25
      break
    case 88:
      console.log('C#5/Db5')
      oscillator.frequency.value = 554.37
      break
    case 67:
      console.log('D5')
      oscillator.frequency.value = 587.33
      break
    case 86:
      console.log('D#5/Eb5')
      oscillator.frequency.value = 622.25
      break
    case 66:
      console.log('E5')
      oscillator.frequency.value = 659.25
      break
    case 78:
      console.log('F5')
      oscillator.frequency.value = 698.46
      break
    case 77:
      console.log('F#5/Gb5')
      oscillator.frequency.value = 739.99
      break
    case 188:
      console.log('G5')
      oscillator.frequency.value = 783.99
      break
    case 190:
      console.log('G#5/Ab5')
      oscillator.frequency.value = 830.61
      break
    case 191:
      console.log('A5')
      oscillator.frequency.value = 880.00
      break
    case 9:
      console.log('muted')
      oscillator.frequency.value = 0
    default:
      console.log(event.keyCode)
      break
  }
}

// frequencies
// http://www.phy.mtu.edu/~suits/notefreqs.html