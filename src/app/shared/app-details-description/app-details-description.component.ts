import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { App } from '../../shared/app.model';
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Scrollbar,
  Thumbs,
} from 'swiper';

SwiperCore.use([Navigation, Thumbs, Autoplay, Scrollbar, A11y]);

@Component({
  selector: 'store-app-details-description',
  templateUrl: './app-details-description.component.html',
  styleUrls: ['./app-details-description.component.scss'],
})
export class AppDetailsDescriptionComponent implements OnInit {
  @Input() app: App;
  showCurrentReleaseInfo = false;
  showThumbnails = true;
  moreThenOneImage = true;
  isHandset = false;

  thumbsSwiper: SwiperCore;
  setThumbsSwiper(swiper: SwiperCore) {
    this.thumbsSwiper = swiper;
  }

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        this.isHandset = result.matches;
        this.setShowThumbnails();
      });
  }

  private setShowThumbnails() {
    this.showThumbnails = this.moreThenOneImage && !this.isHandset;
  }

  ngOnInit() {
    if (this.app) {
      if (
        this.app.currentReleaseVersion &&
        this.app.currentReleaseVersion.length > 0 &&
        this.app.currentReleaseDescription &&
        this.app.currentReleaseDescription.length > 0
      ) {
        this.showCurrentReleaseInfo = true;
      }

      this.moreThenOneImage =
        this.app.screenshots && this.app.screenshots.length > 1;
      this.setShowThumbnails();
    }
  }
}
