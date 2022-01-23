## Part List

- [Pi Zero](https://tinyurl.com/7ky7ytzn)
- [16Gb Micro SD Card](https://tinyurl.com/47mbs2ju)
- [1 x MDV 2x2A DC Motor Controller L298N](https://tinyurl.com/b5xmh8cu)

- [2 x DC Motor - 12V 100RPM with Hub & Bracket](https://tinyurl.com/bdnzzzed)

- [4 x VL53L1X Time of Flight (ToF) Sensor](https://thepihut.com/products/vl53l1x-time-of-flight-tof-sensor-breakout)

- [Tilt Compensated Magnetic Compass CMPS12](https://tinyurl.com/jz88j5ah)

- [PA1010D GPS Breakout](https://tinyurl.com/ej53j775)

- [BME280 Temp/Press/Humid Sensor](https://tinyurl.com/ys6bf4w7)

- [1 x Jumper Wires 20pk (Female/Female) 100mm](https://tinyurl.com/yc5jhwy2)

- [1 x Jumper Wires Female/Male - 20 x 6"](https://tinyurl.com/fa5pjt72)

## Raspberry Pi Initial Setup

Install Raspbian (headless) using the [Raspberry Pi Imager](https://www.raspberrypi.com/news/raspberry-pi-imager-imaging-utility/) which can be downloaded from [here](https://www.raspberrypi.com/software/)

With the SD Card inserted edit the following files to set hostname and WIFI connection details

/etc/hosts \
/etc/wpa_supplicant/wpa_supplicant.conf

DDNS setup using [no-ip](https://www.noip.com/)
Follow the install instructions on [this page](https://www.noip.com/download?page=linux)

Install Pil Lighthttpd following the instructions on [this page](https://pimylifeup.com/raspberry-pi-lighttpd/)

Enable i2c :-

sudo apt install -y i2c-tools python3-smbus
sudo raspi-config nonint do_i2c 0

check its enabled :-

sudo raspi-config nonint get_i2c

check contected devices

sudo i2cdetect -y 1

install lighthttpd

add the following line to /etc/lighttpd/conf/lighttpd.conf :-

    server.error-handler-404 = "/index.html"

change the port that lighthttpd runs on to 4200

restart the service

    service lighttpd restart

sudo apt install python3-flask
