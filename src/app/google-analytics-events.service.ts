import { Injectable } from '@angular/core';

declare let ga: Function;

@Injectable()
export class GoogleAnalyticsEventsService {

  public emitPageView(url: string) {

    if (typeof ga !== 'undefined') {
      ga('set', 'page', url);
      ga('send', 'pageview');
    }

  }


  // This method has been adapted from Stack Overflow
  // Question: https://stackoverflow.com/questions/45758852/angular-4-using-google-analytics/46463247#46463247
  // Answer by laiso: https://stackoverflow.com/users/8417384/laiso
  public emitEvent(eventCategory: string, eventAction: string, eventLabel: string = null, eventValue: number = null) {

    if (typeof ga !== 'undefined') {
      ga('send', 'event', {
        eventCategory: eventCategory,
        eventLabel: eventLabel,
        eventAction: eventAction,
        eventValue: eventValue
      });
    }

  }

}
