import json
import time
from json import JSONEncoder
from bme280 import BME280
from smbus import SMBus

class Sensors:
    temperature = ""
    pressure = ""
    humidity = ""

    def getValues(self):
        bus = SMBus(1)
        bme280 = BME280(i2c_dev=bus)
        bme280.get_temperature()
        time.sleep(1)
        self.temperature = int(bme280.get_temperature())
        self.pressure = int(bme280.get_pressure())
        self.humidity = int(bme280.get_humidity())

# subclass JSONEncoder
class SensorsEncoder(JSONEncoder):
        def default(self, o):
            return o.__dict__
