import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

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
    private titleService: Title,
    private metaService: Meta) {

  }

  setTitleAndMetaTags() {

    if (this.app) {
      this.titleService.setTitle(this.app.name + ' | Apps on Flathub');
      this.metaService.updateTag({ name: 'description', content: this.app.summary });
      this.metaService.updateTag({ name: 'keywords', content: 'install,flatpak,' + this.app.name + ' ,linux,ubuntu,fedora' });
    }
    else {
      this.titleService.setTitle('App not found | Apps on Flathub');
      this.metaService.updateTag({ name: 'description', content: 'App not found' });
      this.metaService.addTag({ name: 'keywords', content: '' });
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
      .subscribe(app => { this.app = app; this.setTitleAndMetaTags(); });
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
