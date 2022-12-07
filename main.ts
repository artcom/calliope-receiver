radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
serial.setBaudRate(BaudRate.BaudRate9600)
radio.setGroup(1)
basic.forever(function () {
	
})
