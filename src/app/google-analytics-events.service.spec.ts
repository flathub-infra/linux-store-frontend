import { TestBed, inject } from '@angular/core/testing';

import { GoogleAnalyticsEventsService } from './google-analytics-events.service';

describe('GoogleAnalyticsEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAnalyticsEventsService]
    });
  });

  it('should be created', inject([GoogleAnalyticsEventsService], (service: GoogleAnalyticsEventsService) => {
    expect(service).toBeTruthy();
  }));
});
