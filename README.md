# Linux Store Frontend

This is a web application to browse and install applications present in Flatpak repositories, like Flathub and others.

The web app obtains data calling a remote REST API implemented in [linux-store-backend](https://github.com/jgarciao/linux-store-backend) 

This app began as a proof of concept but it's likely to be used for the official Flathub website in the near future. See a demo at https://beta.flathub.org

There is also a development version at http://45.55.104.129

## Running this app locally

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

Steps to run this app locally:
* Install Node.js LTS (6.11.X at this time) or newer. We find useful using [nvm](https://github.com/creationix/nvm) to install and manage multiple Node.js versions.
* Install [angular-cli:](https://github.com/angular/angular-cli) 
  * ```npm install -g @angular/cli```
* Install deps:
  * ```npm install ```
* Run `npm start` for a dev server calling the remote linux-store-backend. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Hacking linux-store-frontend

linux-store-frontend is developed using:
* [Angular](https://angular.io/): web framework. Checkout Angular's [Quickstart](https://angular.io/guide/quickstart), [Tour of Heroes](https://angular.io/tutorial) and [Building Beautiful Web Apps With Angular Material](https://www.barbarianmeetscoding.com/blog/2017/01/31/building-beautiful-web-apps-with-angular-material-part-i/) if you are not familiar with Angular
* [Angular Material](https://material.angular.io/): Material Design components for Angular
* [Angular Flex Layout](https://github.com/angular/flex-layout): HTML UI layout for Angular applications; using Flexbox and a Responsive API 

I've been trying to make this app themable (still a work in progress) using the facilities provided by Angular Material. Read next links for more info:
* [Theming your Angular Material app](https://material.angular.io/guide/theming)
* [Theming your custom components](https://material.angular.io/guide/theming-your-components)
* [Angular Material typography](https://material.angular.io/guide/typography)

To get started with hacking the app the following tools are very helpful:
* [Visual Studio Code](https://code.visualstudio.com/)
* [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)

## TODO
* ~~Migrate from angular-mdl to angular-material2 using angular-flex-layout~~
* Search apps by ~~name~~, keywords, ~~categories~~, ...
* Search & install themes
* Search & install runtimes
* Pagination
* Activity: events, ...

## Bugs and feature requests

I welcome friendly issues and feature requests. Keep in mind that this is a personal project that I do in my spare time. 
