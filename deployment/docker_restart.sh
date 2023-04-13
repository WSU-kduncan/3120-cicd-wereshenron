#!/bin/bash
sudo docker pull wereshenron/testimage
sudo docker stop $(sudo docker ps -q --filter ancestor=wereshenron/testimage)
sudo docker rm $(sudo docker ps -aq --filter ancestor=wereshenron/testimage)
sudo docker run -d -p 8080:80 wereshenron/testimage
