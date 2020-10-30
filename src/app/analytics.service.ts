import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import { Angulartics2Piwik } from 'angulartics2/piwik';

// tslint:disable-next-line:ban-types
declare let ga: Function;

/**
 * @description
 *
 * Provides tracking of pageviews and events in Google Analytics and Matomo
 *
 *
 */
@Injectable()
export class AnalyticsService {
  constructor(
    private angulartics2: Angulartics2,
    private angulartics2Piwik: Angulartics2Piwik
  ) {}

  public startTracking() {
    this.angulartics2Piwik.startTracking();
  }

  public emitPageView(url: string) {
    if (typeof ga !== 'undefined') {
      ga('set', 'page', url);
      ga('send', 'pageview');
    }

    this.angulartics2Piwik.pageTrack(url);
  }

  // This method has been adapted from Stack Overflow
  // Question: https://stackoverflow.com/questions/45758852/angular-4-using-google-analytics/46463247#46463247
  // Answer by laiso: https://stackoverflow.com/users/8417384/laiso
  public emitEvent(
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null
  ) {
    if (typeof ga !== 'undefined') {
      ga('send', 'event', {
        eventCategory,
        eventLabel,
        eventAction,
        eventValue,
      });
    }

    this.angulartics2.eventTrack.next({
      action: eventAction,
      properties: {
        category: eventCategory,
        label: eventLabel,
      },
    });
  }
}
