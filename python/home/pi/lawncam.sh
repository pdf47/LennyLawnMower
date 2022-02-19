#!/bin/bash

pushd /home/pi
mkdir /dev/shm/streaming
ln -s /dev/shm/streaming /var/www/html/streaming

ffmpeg -input_format h264 -f video4linux2 -video_size 640x480 -framerate 10 -i /dev/video0 -c:v copy -f dash -window_size 10 -remove_at_exit 1 -hls_playlist 1 /dev/shm/streaming/manifest.mpd

popd
