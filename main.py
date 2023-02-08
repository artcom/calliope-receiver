def on_received_string(receivedString):
    global lastMessage
    if receivedString != lastMessage:
        serial.write_line(receivedString)
        serial.write_line("" + receivedString.split("/")[0] + "/rssi " + str(radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)))
        lastMessage = receivedString
radio.on_received_string(on_received_string)

lastMessage = ""
lastMessage = ""
serial.set_baud_rate(BaudRate.BAUD_RATE115200)
serial.set_tx_buffer_size(128)
radio.set_group(1)
radio.set_frequency_band(70)

def on_every_interval():
    serial.write_line("ping")
loops.every_interval(10000, on_every_interval)

def on_forever():
    pass
basic.forever(on_forever)
