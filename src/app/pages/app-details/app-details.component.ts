import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { SeoService } from '../../seo.service';

import { App } from '../../shared/app.model';
import { Review } from '../../shared/review.model';
import { LinuxStoreApiService } from '../../linux-store-api.service';
import { GoogleAnalyticsEventsService } from '../../google-analytics-events.service';

@Component({
  selector: 'store-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.scss']
})
export class AppDetailsComponent implements OnInit {

  @Input() app: App;

  paramAppId: string;

  reviews: Review[];
  selectedReview: Review;

  public pending = false;

  constructor(
    private linuxStoreApiService: LinuxStoreApiService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private seoService: SeoService) {


  }

  setPageMetadata() {

    var description: string;

    if (this.app) {

      if (this.app.description && this.app.description.length > 0) {

        var descriptionWithOutMarkup: string;
        descriptionWithOutMarkup = this.app.description.replace(/<[^>]+>/g, '');

        if (descriptionWithOutMarkup.length > 297) {
          description = descriptionWithOutMarkup.substring(0, 297) + '...';
        }
        else {
          description = descriptionWithOutMarkup;
        }
      }
      else {
        description = this.app.summary;
      }

      var iconUrl: string = this.app.iconDesktopUrl;

      if (this.app.iconDesktopUrl && this.app.iconDesktopUrl.startsWith('/')) {
        iconUrl = window.location.protocol + '//' + window.location.hostname + ':' +
          window.location.port + this.app.iconDesktopUrl;
      }
      else {
        iconUrl = this.app.iconDesktopUrl;
      }

      this.seoService.setPageMetadata(
        this.app.name + ' - Linux Apps on Flathub',
        description,
        iconUrl);
    }
    else {
      this.seoService.setPageMetadata('App not found - Linux Apps on Flathub', 'App not found');
    }

  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.paramAppId = params.get('appId');
        this.getApp(this.paramAppId);
      }
    );

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  getApp(id: string): void {
    this.linuxStoreApiService.getApp(id)
      .subscribe(app => { this.app = app; this.setPageMetadata(); });
  }

  getReviews(id: string): void {
    const app_id: string = id.concat('.desktop');
    this.linuxStoreApiService.getReviews(app_id)
      .subscribe(reviews => { this.reviews = reviews; });
  }

  onSelect(review: Review): void {
    this.selectedReview = review;
  }

  isSelected(review: Review): boolean {
    return review.app_id === this.selectedReview.app_id;
  }

  onInstall(app: App) {
    // Track instal event
    this.googleAnalyticsEventsService.emitEvent('App', 'Install', app.flatpakAppId);
  }

}
