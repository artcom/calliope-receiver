radio.onReceivedString(function (receivedString) {
    if (receivedString != lastMessage) {
        serial.writeLine(receivedString)
        lastMessage = receivedString
    }
})
let lastMessage = ""
lastMessage = ""
serial.setBaudRate(BaudRate.BaudRate115200)
serial.setTxBufferSize(128)
radio.setGroup(1)
radio.setFrequencyBand(42)
basic.forever(function () {
	
})
