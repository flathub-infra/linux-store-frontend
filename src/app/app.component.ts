import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { GoogleAnalyticsEventsService } from './google-analytics-events.service';

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
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  onSearch(searchTerm: string) {
    if (typeof searchTerm === 'string' && searchTerm && searchTerm.trim() && searchTerm.trim().length > 2) {
      // Track search event
      this.googleAnalyticsEventsService.emitEvent('Search', 'SearchFromToolbar', searchTerm);
      this.router.navigate(['apps/search', searchTerm]);
    }
  }

}
