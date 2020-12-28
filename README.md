# Linux Store Frontend

This is a web application to browse and install applications present in Flatpak repositories. It began as a personal proof of concept but its used in https://flathub.org since April 2018.

The web app obtains data calling a remote REST API implemented in [linux-store-backend](https://github.com/jgarciao/linux-store-backend) 

There is a [development server](http://45.55.104.129) where we test new stuff.


## Code contribution

First of all thanks for considering contributing to this project!

Pull request are welcome. Please, create an issue fist explaining what you want to do and how. Do the same for existing issues.

## Running this app locally

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

Steps to run this app locally:
* Install Node.js LTS (10.13.X at this time) or newer. 

  We find useful using [nvm](https://github.com/creationix/nvm) to install and manage multiple Node.js versions:
  * Install nvm & node requirements for Debian/Ubuntu:
    ```
    apt-get install curl build-essential libssl-dev libsass-dev
    ```
  * Install nvm & node requirements for Fedora:
    ```
    dnf install make automake gcc gcc-c++ openssl-devel libsass libsass-devel
    ```
  * Install nvm & node requirements for Fedora Silverblue:
    ```
    rpm-ostree install make automake gcc gcc-c++ openssl-devel libsass libsass-devel
    ```
  * Install nvm:
    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
    source "$HOME"/.bashrc
    ```
  * Install Node.js LTS (14.X.X 'fermium' at this time)
    ```
    nvm install --lts=fermium   

    # In Fedora Silverblue I found this error and had to run the suggested commands:
    #    nvm is not compatible with the npm config "prefix" option: currently set to "/var/home/jorge/.nvm/versions/node/v14.15.3"
    #    Run `nvm use --delete-prefix v14.15.2` to unset it.
    nvm use --delete-prefix v14.15.2
    npm config delete prefix
    npm config set prefix $NVM_DIR/versions/node/v14.15.2

    # Set default version
    nvm use lts/fermium
    nvm alias default lts/fermium

    # Check installation
    nvm ls
      ->     v14.15.3
      default -> lts/fermium (-> v14.15.3)
      node -> stable (-> v14.15.3) (default)
      stable -> 14.15 (-> v14.15.3) (default)
      iojs -> N/A (default)
      unstable -> N/A (default)
      lts/* -> lts/fermium (-> v14.15.3)
      lts/argon -> v4.9.1 (-> N/A)
      lts/boron -> v6.17.1 (-> N/A)
      lts/carbon -> v8.17.0 (-> N/A)
      lts/dubnium -> v10.23.0 (-> N/A)
      lts/erbium -> v12.20.0 (-> N/A)
      lts/fermium -> v14.15.3
    ```

* Install [angular-cli:](https://cli.angular.io/) 
  * ```npm install -g @angular/cli```
* Go to the root of this project and install the javascript dependencies:
  * ```npm install ```
* Start the webapp running the command `npm start`. This will compile the code and start a local dev server. Navigate to `http://localhost:4200/` to see the webapp running! 
* The app will automatically reload if you change any of the source files.
* If the app doesn't update automatically on every change in the code it might be because of [this issue related to the inotify limits](https://github.com/angular/angular-cli/issues/2356#issuecomment-278298550). I've done this to fix it in Fedora Silverblue:
  ```
  sudo vi /etc/sysctl.d/99-sysctl.conf

    # Increase the inotify watches limit to fix change detection
    # problems with Angular
    fs.inotify.max_user_watches=65536

  sudo sysctl -p --system

  cat /proc/sys/fs/inotify/max_user_watches
    65536
  ```


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
* [Visual Studio Code](https://code.visualstudio.com/). Available on [Flathub](https://flathub.org/apps/details/com.visualstudio.code)
* [Angular Essentials extension pack for VS Code](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)

## TODO
* ~~Migrate from angular-mdl to angular-material2 using angular-flex-layout~~
* Search apps by ~~name~~, keywords, ~~categories~~, ...
* List available themes and runtimes
* Pagination
* Activity: events, ...

## Bugs and feature requests

I welcome friendly issues and feature requests. Keep in mind that this is a personal project that I do in my spare time. 
