import { Injectable } from '@angular/core';

declare let ga: Function;


  // This method has been adapted from Stack Overflow
  // Question: https://stackoverflow.com/questions/45758852/angular-4-using-google-analytics/46463247#46463247
  // Answer by laiso: https://stackoverflow.com/users/8417384/laiso

@Injectable()
export class GoogleAnalyticsEventsService {

  public emitEvent(eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }

}
