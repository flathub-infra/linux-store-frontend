/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlathubApiService } from './flathub-api.service';

describe('Service: FlathubApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlathubApiService]
    });
  });

  it('should ...', inject([FlathubApiService], (service: FlathubApiService) => {
    expect(service).toBeTruthy();
  }));
});
