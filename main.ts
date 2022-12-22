radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
serial.setBaudRate(BaudRate.BaudRate9600)
serial.setTxBufferSize(128)
radio.setFrequencyBand(42)
radio.setGroup(1)
basic.forever(function () {
	
})
