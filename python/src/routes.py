import logging
import threading
import time
import concurrent.futures
from flask import Flask, make_response
import sensors
import pipeline
import sensors 

app = Flask(__name__)

format = "%(asctime)s: %(message)s"
logging.basicConfig(format=format, level=logging.INFO,
                    datefmt="%H:%M:%S")
logging.getLogger().setLevel(logging.DEBUG)

pipeline = Pipeline()
with concurrent.futures.ThreadPoolExecutor(max_workers=2) as executor:
    executor.submit(producer, pipeline)
    executor.submit(consumer, pipeline)

logging.debug("wibble")

@app.route('/')
def version():
    return 'Lenny Lawn Mower v0.1'

@app.route('/bme280')
def bme280():
    sensors = Sensors()
    return make_response(SensorsEncoder().encode(sensors), 200)

@app.route('/forward')
def forward():
    return 'forward not implemented yet'

@app.route('/reverse')
def reverse():
    return 'reverse not implemented yet'

@app.route('/left')
def left():
    return 'left not implemented yet'

@app.route('/right')
def right():
    return 'right not implemented yet'
    