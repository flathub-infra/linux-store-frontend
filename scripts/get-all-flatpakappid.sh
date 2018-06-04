#!/bin/bash

curl -s https://flathub.org/api/v1/apps | jq -r  .[].flatpakAppId | sort

