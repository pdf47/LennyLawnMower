import RPi.GPIO as gpio
import time

gpio.setmode(gpio.BCM)
gpio.setup(17, gpio.OUT)
speed = gpio.PWM(22, 1000)
gpio.output(17, False)
speed.start(100)
seconds = 3
time.sleep(5)
