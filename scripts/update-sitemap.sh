#!/bin/bash
DESTFILENAME=../src/sitemap.txt
BASEURL=https://flathub.org

command -v curl >/dev/null 2>&1 || { echo >&2 "This script requires curl but it's not installed.  Aborting."; exit 1; }
command -v jq >/dev/null 2>&1 || { echo >&2 "This script requires jq but it's not installed.  Aborting."; exit 1; }

echo Updating $DESTFILENAME

echo $BASEURL > $DESTFILENAME
echo $BASEURL/home   >> $DESTFILENAME
echo $BASEURL/about  >> $DESTFILENAME
echo $BASEURL/feeds  >> $DESTFILENAME
echo $BASEURL/badges >> $DESTFILENAME
echo $BASEURL/apps   >> $DESTFILENAME
echo $BASEURL/apps/collection/popular >> $DESTFILENAME
echo $BASEURL/apps/collection/recently-updated >> $DESTFILENAME
echo $BASEURL/apps/collection/editors-choice-apps >> $DESTFILENAME
echo $BASEURL/apps/collection/editors-choice-games >> $DESTFILENAME
echo $BASEURL/apps/category/All >> $DESTFILENAME
echo $BASEURL/apps/category/AudioVideo >> $DESTFILENAME
echo $BASEURL/apps/category/Development >> $DESTFILENAME
echo $BASEURL/apps/category/Education >> $DESTFILENAME
echo $BASEURL/apps/category/Game >> $DESTFILENAME
echo $BASEURL/apps/category/Graphics >> $DESTFILENAME
echo $BASEURL/apps/category/Network >> $DESTFILENAME
echo $BASEURL/apps/category/Office >> $DESTFILENAME
echo $BASEURL/apps/category/Science >> $DESTFILENAME
echo $BASEURL/apps/category/System >> $DESTFILENAME
echo $BASEURL/apps/category/Utility >> $DESTFILENAME

APPIDLIST=`curl -s echo $BASEURL/api/v1/apps | jq -r  .[].flatpakAppId | sort`

for appid in $APPIDLIST  
do
  echo $BASEURL/apps/details/$appid >> $DESTFILENAME
done

echo Sitemap file updated successfully
