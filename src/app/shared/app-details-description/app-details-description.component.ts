import { Component, OnInit, Input } from '@angular/core';
import { ImageItem, GalleryItem } from 'ng-gallery';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Meta } from '@angular/platform-browser';
import { App } from '../../shared/app.model';

@Component({
  selector: 'store-app-details-description',
  templateUrl: './app-details-description.component.html',
  styleUrls: ['./app-details-description.component.scss'],
})
export class AppDetailsDescriptionComponent implements OnInit {
  @Input() app: App;
  items: GalleryItem[];
  showCurrentReleaseInfo = false;
  showThumbnails = true;
  isHandset = false;

  constructor(breakpointObserver: BreakpointObserver, private meta: Meta) {
    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        if (result.matches) {
          this.isHandset = true;
        }
      });
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

      if (this.app.screenshots && this.app.screenshots.length > 0) {
        this.items = this.app.screenshots.map(
          (item) =>
            new ImageItem({ src: item.imgDesktopUrl, thumb: item.thumbUrl })
        );
        this.showThumbnails =
          this.items && this.items.length > 1 && !this.isHandset;
      }

      this.meta.addTags([
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'og:description', content: this.app.summary },
        { name: 'og:title', content: this.app.name },
      ]);

      const preferredImage = this.getPreferredImage();
      if (preferredImage) {
        this.meta.addTags([{ name: 'og:image', content: preferredImage }]);
      }
    }
  }

  private getPreferredImage(): string | undefined {
    if (
      this.app.screenshots?.length > 0 &&
      this.app.screenshots[0]?.imgDesktopUrl
    ) {
      return this.app.screenshots[0].imgDesktopUrl;
    } else if (!!this.app.iconDesktopUrl) {
      return this.app.iconDesktopUrl;
    }
  }
}
