from flask import Flask, make_response
from sensors import Sensors, SensorsEncoder

app = Flask(__name__)

@app.route('/')
def version():
    return 'Lenny Lawn Mower v0.1'

@app.route('/bme280')
def bme280():
    sensors = Sensors()
    sensors.getValues()
    response = make_response(SensorsEncoder().encode(sensors), 200)
    response.headers["Access-Control-Allow-Origin"] = "http://lennylawnmower.ddns.net:4200"
    return response

@app.route('/bme280copy')
def bme280copy():
    sensors = Sensors()
    sensors.getValues()
    return make_response(SensorsEncoder().encode(sensors), 200, headers)

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
    
