import { Component, OnInit, Input } from '@angular/core';
import { Gallery, GalleryItem, GalleryConfig } from 'ng-gallery';

import { App } from '../../shared/app.model';
import { Screenshot } from '../screenshot.model';

@Component({
  selector: 'store-app-details-description',
  templateUrl: './app-details-description.component.html',
  styleUrls: ['./app-details-description.component.scss']
})
export class AppDetailsDescriptionComponent implements OnInit {

  @Input() app: App;

  galleryConfig: GalleryConfig = {
    "gestures": true,
    "style": {
      "width": "900px",
      "height": "460px",
      //"background": "#121519"
      "background": "#BCBCB6"
    },
    "navigation": {},
    "loader": {
      "icon": "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='135' height='140' fill='%23fff'%3E%3Crect width='15' height='120' y='10' rx='6'%3E%3Canimate attributeName='height' begin='0.5s' dur='1s' values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear' repeatCount='indefinite'/%3E%3Canimate attributeName='y' begin='0.5s' dur='1s' values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect width='15' height='120' x='30' y='10' rx='6'%3E%3Canimate attributeName='height' begin='0.25s' dur='1s' values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear' repeatCount='indefinite'/%3E%3Canimate attributeName='y' begin='0.25s' dur='1s' values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect width='15' height='140' x='60' rx='6'%3E%3Canimate attributeName='height' begin='0s' dur='1s' values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear' repeatCount='indefinite'/%3E%3Canimate attributeName='y' begin='0s' dur='1s' values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect width='15' height='120' x='90' y='10' rx='6'%3E%3Canimate attributeName='height' begin='0.25s' dur='1s' values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear' repeatCount='indefinite'/%3E%3Canimate attributeName='y' begin='0.25s' dur='1s' values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect width='15' height='120' x='120' y='10' rx='6'%3E%3Canimate attributeName='height' begin='0.5s' dur='1s' values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear' repeatCount='indefinite'/%3E%3Canimate attributeName='y' begin='0.5s' dur='1s' values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E"
    },
    "description": null,
    "player": {
      "autoplay": false,
      "interval": 3000,
      "progress": true,
      "position": "bottom"
    },
    "thumbnails": {
      "width": 90,
      "height": 70,
      "position": "bottom"
    },
    "lightbox": {
      "backdropClass": "g-backdrop",
      "panelClass": "g-overlay",
      "hasBackdrop": true
    },
    "imageSize": "cover"
  };

  constructor(public gallery: Gallery) {
  }

  ngOnInit() {

    let items: GalleryItem[] = [];

    if (this.app && this.app.screenshots) {

      if(this.app.screenshots.length == 1){
        this.galleryConfig.loader = null;
        this.galleryConfig.navigation = null;
        this.galleryConfig.thumbnails = null;
      }

      for (let screenshot of this.app.screenshots) {
        let item: GalleryItem = { src: "", thumbnail: "", text: "" };
        item.src = screenshot.imgDesktopUrl;
        item.thumbnail = screenshot.thumbUrl;
        item.text = this.app.name;
        items.push(item);
      }
    }

    this.gallery.setConfig(this.galleryConfig);
    this.gallery.reset();
    this.gallery.load(items);

  }

}
