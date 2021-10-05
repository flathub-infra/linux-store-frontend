import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

import { AnalyticsService } from './analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showShadow = false;

  constructor(
    public router: Router,
    private analyticsService: AnalyticsService,
    private meta: Meta
  ) {
    // Init Analytics Service
    analyticsService.startTracking();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.analyticsService.emitPageView(event.urlAfterRedirects);
      }
    });

    this.meta.addTags([
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@FlatpakApps' },
      { name: 'og:site_name', content: 'Flathub' },
      { name: 'og:locale', content: 'en_GB' },
      { name: 'og:url', content: window.location.href },
    ]);
  }

  onSearch(searchTerm: string) {
    if (
      typeof searchTerm === 'string' &&
      searchTerm &&
      searchTerm.trim() &&
      searchTerm.trim().length > 2
    ) {
      // Track search event
      this.analyticsService.emitEvent(
        'Search',
        'SearchFromToolbar',
        searchTerm
      );
      this.router.navigate(['apps/search', searchTerm]);
    }
  }
}
