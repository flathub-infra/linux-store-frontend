#!/bin/bash
INPUTLIST="./get-editors-picks-report-inputlist"
DESTFILE=./reports/editors-picks-report-`date +"%Y-%m-%d"`.csv

if [ $# -eq 0 ]
  then
    echo Script to generate a report useful for choosing editor\'s picks
    echo "Usage: $0 GITHUB_ACCESS_TOKEN"
    echo
    echo "Find here how to create a Github access token:"	
    echo " - https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/"
    exit 1
fi



GITHUB_ACCESS_TOKEN=$1

echo APPID,APP_POPULARITY,IS_FREE,IS_GAME,GITHUB_OPEN_ISSUES_COUNT  >> $DESTFILE
APP_POPULARITY=1

while read -r line
do
    echo -n "."
    
    APPID="$line"

    if [ -n "$APPID" ] && [[ $APPID != *"#"* ]] ; then
    
      PROJECT_LICENSE_PROPRIETARY_COUNT=`curl -s https://flathub.org/api/v1/apps/$APPID | jq .projectLicense | grep proprietary | wc -l`
      if [ "$PROJECT_LICENSE_PROPRIETARY_COUNT" -eq "0" ]
      then
        IS_FREE="true"
      else
        IS_FREE="false"
      fi

      BELONGS_TO_GAME_CATEGORIES_COUNT=`curl -s https://flathub.org/api/v1/apps/$APPID | jq '.categories ' | grep name | grep Game | wc -l`
      if [ "$BELONGS_TO_GAME_CATEGORIES_COUNT" -eq "0" ]
      then
        IS_GAME="false"
      else
        IS_GAME="true"
      fi

      GITHUB_OPEN_ISSUES_COUNT=`curl -s https://api.github.com/repos/flathub/$APPID?access_token=$GITHUB_ACCESS_TOKEN | jq -r  .open_issues_count`

      echo "$APPID,$APP_POPULARITY,$IS_FREE,$IS_GAME,$GITHUB_OPEN_ISSUES_COUNT" >> $DESTFILE

      APP_POPULARITY=$((APP_POPULARITY+1))
    fi
done < "$INPUTLIST"

echo
echo Report generated at $DESTFILE
