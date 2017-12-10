import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Gallery, GalleryItem } from 'ng-gallery';

import { App } from '../../shared/app.model';


@Component({
  selector: 'store-app-details-description',
  templateUrl: './app-details-description.component.html',
  styleUrls: ['./app-details-description.component.scss']
})
export class AppDetailsDescriptionComponent implements AfterViewInit {

  @Input() app: App;

  constructor(public gallery: Gallery) {
  }

ngAfterViewInit() {

              const images: GalleryItem[] = [
                {
                  src: 'https://flathub.org/repo/screenshots/org.gnome.Builder-stable/624x351/org.gnome.Builder-3582853b1ad4a82da236a964983cef7c.png',
                  thumbnail: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/224x126/com.play0ad.zeroad-f78bee1071a9541a87ba6d2153c9679f.png'
                },
                {
                  src: 'https://flathub.org/repo/screenshots/org.gnome.Builder-stable/624x351/org.gnome.Builder-19b4818c4fda40f94d8e6ccc1379dc6d.png',
                  thumbnail: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/224x126/com.play0ad.zeroad-877c35adb576a57d452d016b89778b62.png'
                },
                {
                  src: 'https://flathub.org/repo/screenshots/org.gnome.Builder-stable/624x351/org.gnome.Builder-e8478cf3a7b4c87b6d793fa51c9af497.png',
                  thumbnail: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/224x126/com.play0ad.zeroad-51d2d5d18af0fe46212c34be1b0c48f4.png'
                }
              ];

              const images2: GalleryItem[] = [
                {
                  src: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/624x351/com.play0ad.zeroad-f78bee1071a9541a87ba6d2153c9679f.png',
                  thumbnail: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/224x126/com.play0ad.zeroad-f78bee1071a9541a87ba6d2153c9679f.png'
                },
                {
                  src: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/624x351/com.play0ad.zeroad-877c35adb576a57d452d016b89778b62.png',
                  thumbnail: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/224x126/com.play0ad.zeroad-877c35adb576a57d452d016b89778b62.png'
                },
                {
                  src: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/624x351/com.play0ad.zeroad-51d2d5d18af0fe46212c34be1b0c48f4.png',
                  thumbnail: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/224x126/com.play0ad.zeroad-51d2d5d18af0fe46212c34be1b0c48f4.png'
                },
                {
                  src: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/624x351/com.play0ad.zeroad-fec44e9e37f37de124cda149099818bf.png',
                  thumbnail: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/224x126/com.play0ad.zeroad-fec44e9e37f37de124cda149099818bf.png'
                }
              ];

              const images3: GalleryItem[] = [];


              this.gallery.load(images2);


      // setTimeout(() => {

      //   const images: GalleryItem[] = [
      //     {
      //       src: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/624x351/com.play0ad.zeroad-f78bee1071a9541a87ba6d2153c9679f.png',
      //       thumbnail: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/224x126/com.play0ad.zeroad-f78bee1071a9541a87ba6d2153c9679f.png'
      //     },
      //     {
      //       src: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/624x351/com.play0ad.zeroad-877c35adb576a57d452d016b89778b62.png',
      //       thumbnail: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/224x126/com.play0ad.zeroad-877c35adb576a57d452d016b89778b62.png'
      //     },
      //     {
      //       src: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/624x351/com.play0ad.zeroad-51d2d5d18af0fe46212c34be1b0c48f4.png',
      //       thumbnail: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/224x126/com.play0ad.zeroad-51d2d5d18af0fe46212c34be1b0c48f4.png'
      //     },
      //     {
      //       src: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/624x351/com.play0ad.zeroad-fec44e9e37f37de124cda149099818bf.png',
      //       thumbnail: 'https://flathub.org/repo/screenshots/com.play0ad.zeroad-stable/224x126/com.play0ad.zeroad-fec44e9e37f37de124cda149099818bf.png'
      //     }
      //   ];

      //   this.gallery.load(images);
      // }, 0);


  }

}
