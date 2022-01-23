from flask import Flask, make_response
from sensors import Sensors, SensorsEncoder

app = Flask(__name__)

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
    