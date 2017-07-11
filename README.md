# Linux Store Frontend  (proof of concept)

This is a simple web application to browse and install applications present in Flatpak repositories, like Flathub and others.

The web app obtains data calling a remote REST API implemented in [linux-store-backend](https://github.com/jgarciao/linux-store-backend) 

See demo at http://45.55.104.129/apps

**Note: at this time this is just a personal proof-of-concept not endorsed by Flathub or other projects**

## Running this app locally

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

Steps to run this app locally:
* Install npm 6.10.x or newer
* Install [angular-cli:](https://github.com/angular/angular-cli) 
  * ```npm install -g @angular/cli```
* Install deps:
  * ```npm install ```
* Run `ng serve -e prod` for a dev server calling the remote linux-store-backend. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng serve` if you are running your local [linux-store-backend](https://github.com/jgarciao/linux-store-backend) 


## TODO
* Migrate from angular-mdl to angular-material2 using angular-flex-layout
* Search apps by name, keywords, categories, ...
* Search & install themes
* Search & install runtimes
* Pagination
* Activity: events, ...
