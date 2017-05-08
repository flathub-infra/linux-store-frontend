import { TestBed, inject } from '@angular/core/testing';

import { FlathubApiService } from './flathub-api.service';

describe('FlathubApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlathubApiService]
    });
  });

  it('should ...', inject([FlathubApiService], (service: FlathubApiService) => {
    expect(service).toBeTruthy();
  }));
});
