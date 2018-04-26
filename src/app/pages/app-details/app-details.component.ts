import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

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

  @Input()
  app: App;

  paramAppId: string;

  reviews: Review[];
  selectedReview: Review;

  public pending: boolean = false;

  constructor(
    private linuxStoreApiService: LinuxStoreApiService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => {
        this.paramAppId = params.get('appId');
        this.getApp( this.paramAppId);
      }
    );

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  getApp(id: string): void {

    this.linuxStoreApiService.getApp(id)
      .subscribe(app => { this.app = app; });

  }

  getReviews(id: string): void {
    let app_id: string = id.concat('.desktop');
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
    this.googleAnalyticsEventsService.emitEvent("App", "Install", app.flatpakAppId);
  }


}

