#!/bin/bash

DIT="/home/ec2-user/assignment_backend"
if [ -d $DIT ]; then
  cd /home/ec2-user
  sudo rm -rf assignment_backend
else
  echo "Directory does not exist"
fi
