import { Component, OnInit, Input } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

import { App } from '../../shared/app.model';
import { Screenshot } from '../screenshot.model';

@Component({
  selector: 'store-app-details-description',
  templateUrl: './app-details-description.component.html',
  styleUrls: ['./app-details-description.component.scss']
})
export class AppDetailsDescriptionComponent implements OnInit {

  @Input() app: App;

  items: GalleryItem[];

  showCurrentReleaseInfo = false;

  ngOnInit() {
    if (this.app) {
      if (this.app.currentReleaseVersion && this.app.currentReleaseVersion.length > 0 &&
          this.app.currentReleaseDescription && this.app.currentReleaseDescription.length > 0) {
          this.showCurrentReleaseInfo = true;
      }

      if (this.app.screenshots) {
        this.items = this.app.screenshots.map(item => new ImageItem(item.imgDesktopUrl, item.thumbUrl));
      }
    }
  }

}
