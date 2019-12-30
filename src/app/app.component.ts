import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AnalyticsService } from './analytics.service';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showShadow = false;

  constructor(
    public router: Router,
    private analyticsService: AnalyticsService) { 

    //Init Analytics Service
    analyticsService.startTracking();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.analyticsService.emitPageView(event.urlAfterRedirects); 
      }
    });
  }

  onSearch(searchTerm: string) {
    if (typeof searchTerm === 'string' && searchTerm && searchTerm.trim() && searchTerm.trim().length > 2) {
      // Track search event
      this.analyticsService.emitEvent('Search', 'SearchFromToolbar', searchTerm);
      this.router.navigate(['apps/search', searchTerm]);
    }
  }

}
