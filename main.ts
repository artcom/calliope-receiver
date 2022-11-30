radio.onReceivedString(function (receivedString) {
    serial.writeString("devices/iss/onRecieve [")
    serial.writeString(receivedString)
    serial.writeLine("]")
})
radio.setGroup(1)
basic.forever(function () {
	
})
