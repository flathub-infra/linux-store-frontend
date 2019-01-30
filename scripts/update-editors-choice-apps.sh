#!/bin/bash
INPUTLIST="./update-editors-choice-apps-inputlist"
DESTFILENAME=../src/app/shared/editors-choice-apps.ts

echo Updating $DESTFILENAME

echo "import { App } from './app.model';"   > $DESTFILENAME
echo                                       >> $DESTFILENAME
echo "export const EDITORSCHOICEAPPS: App[] = [" >> $DESTFILENAME

while read -r line
do
    echo -n "."
    APPID="$line"
    if [ -n "$APPID" ]; then
	
		curl -s https://flathub.org/api/v1/apps/$APPID | jq '.description=""' | jq '.developerName=""' | jq '.projectLicense=""' \
		| jq '.homepageUrl=""'    | jq '.inStoreSinceDate = null' | jq '.currentReleaseDate = null' \
		| jq '.categories = null' | jq 'del(.rating)' | jq 'del(.ratingVotes)' >> $DESTFILENAME

    	echo ","  >> $DESTFILENAME

    fi
done < "$INPUTLIST"

echo "];"     >> $DESTFILENAME

echo
echo File updated successfully

