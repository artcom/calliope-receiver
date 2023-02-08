radio.onReceivedString(function (receivedString) {
    if (receivedString != lastMessage) {
        serial.writeLine(receivedString)
        serial.writeLine("" + receivedString.split("/")[0] + "/rssi " + radio.receivedPacket(RadioPacketProperty.SignalStrength))
        lastMessage = receivedString
    }
})
let lastMessage = ""
lastMessage = ""
serial.setBaudRate(BaudRate.BaudRate115200)
radio.setGroup(1)
radio.setFrequencyBand(70)
loops.everyInterval(10000, function () {
    serial.writeLine("ping")
})
