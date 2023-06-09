radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        allumer_la_lampe = !(allumer_la_lampe)
    }
    if (allumer_la_lampe) {
        pins.analogWritePin(AnalogPin.P0, 1023)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (receivedNumber == 2) {
        music.playMelody("E B C5 A B G A F ", 300)
    }
    if (receivedNumber == 3) {
        music.playMelody("B A G A G F A C5 ", 300)
    }
})
let allumer_la_lampe = false
radio.setGroup(300)
