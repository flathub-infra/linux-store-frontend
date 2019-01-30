import { Component, OnInit, Input } from '@angular/core';
import { ImageItem, GalleryItem } from '@ngx-gallery/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import { App } from '../../shared/app.model';

@Component({
  selector: 'store-app-details-description',
  templateUrl: './app-details-description.component.html',
  styleUrls: ['./app-details-description.component.scss']
})
export class AppDetailsDescriptionComponent implements OnInit {

  @Input() app: App;
  items: GalleryItem[];
  showCurrentReleaseInfo = false;
  showThumbnails: boolean = true;
  isHandset: boolean = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.isHandset = true;
      }
    });
  }

 
  ngOnInit() {
    
    if (this.app) {
      if (this.app.currentReleaseVersion && this.app.currentReleaseVersion.length > 0 &&
          this.app.currentReleaseDescription && this.app.currentReleaseDescription.length > 0) {
          this.showCurrentReleaseInfo = true;
      }

      if (this.app.screenshots && this.app.screenshots.length > 0) {
        this.items = this.app.screenshots.map(item => new ImageItem({src: item.imgDesktopUrl, thumb: item.thumbUrl})); 
        this.showThumbnails = (this.items && this.items.length > 1 && !this.isHandset); 
      }
    }
  }

}
