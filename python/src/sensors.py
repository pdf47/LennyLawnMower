import json
from json import JSONEncoder
from bme280 import BME280
from smbus import SMBus

class Sensors:
    def __init__(self):
        self.getValues()

    def getValues(self):
        bus = SMBus(1)
        bme280 = BME280(i2c_dev=bus)
        self.temperature = int(bme280.get_temperature())
        self.pressure = int(bme280.get_pressure())
        self.humidity = int(bme280.get_humidity())


# subclass JSONEncoder
class SensorsEncoder(JSONEncoder):
        def default(self, o):
            return o.__dict__