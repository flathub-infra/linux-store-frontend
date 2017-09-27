import { TestBed, inject } from '@angular/core/testing';

import { StoreBackendService } from './store-backend.service';

describe('StoreBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreBackendService]
    });
  });

  it('should be created', inject([StoreBackendService], (service: StoreBackendService) => {
    expect(service).toBeTruthy();
  }));
});
