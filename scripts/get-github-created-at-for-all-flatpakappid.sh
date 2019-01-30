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

declare -a apps
mapfile -t apps < <( curl -s https://flathub.org/api/v1/apps | jq -r  .[].flatpakAppId | sort )

## now loop through the above array
for appid in "${apps[@]}"
do
   APP_GITHUB_CREATEDAT=`curl -s https://api.github.com/repos/flathub/$appid?access_token=$GITHUB_ACCESS_TOKEN | jq .created_at | tr \" \'`

   echo "UPDATE public.app SET in_store_since_date = $APP_GITHUB_CREATEDAT WHERE flatpak_app_id = '$appid';";
done

