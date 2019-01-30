#!/bin/bash

if [ $# -eq 0 ]
  then
    echo
    echo "Usage: $0 GITHUB_ACCESS_TOKEN"
    echo
    echo "Find here how to create a Github access token:"	
    echo " - https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/"
    exit 1
fi

GITHUB_ACCESS_TOKEN=$1
APPIDLIST=`curl -s https://flathub.org/api/v1/apps | jq -r  .[].flatpakAppId | sort`


for appid in $APPIDLIST  
do
  curl -s https://api.github.com/repos/flathub/$appid/contributors?access_token=$GITHUB_ACCESS_TOKEN | grep login  | cut -f 2 -d ":" | sed  "s/ \"/$appid:/" | sed 's/",//'
 
done
