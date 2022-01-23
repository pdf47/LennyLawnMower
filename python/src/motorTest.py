import RPi.GPIO as gpio
import time
def init():
    gpio.setmode(gpio.BCM)
    gpio.setup(17, gpio.OUT)
    gpio.setup(22, gpio.OUT)
    gpio.setup(23, gpio.OUT)
    gpio.setup(24, gpio.OUT)
def reverse(sec):
    init()
    gpio.output(17, True)
    gpio.output(22, True)
    gpio.output(23, True)
    gpio.output(24, True)
    time.sleep(sec)
    gpio.cleanup()
def forward(sec):
    init()
    gpio.output(17, False)
    gpio.output(22, True)
    gpio.output(23, False)
    gpio.output(24, True)
    time.sleep(sec)
    gpio.cleanup()
seconds = 3
time.sleep(seconds)
reverse(seconds)
forward(seconds)
