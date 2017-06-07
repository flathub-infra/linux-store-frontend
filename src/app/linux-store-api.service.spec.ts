import { TestBed, inject } from '@angular/core/testing';

import { LinuxStoreApiService } from './linux-store-api.service';

describe('LinuxStoreApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinuxStoreApiService]
    });
  });

  it('should ...', inject([LinuxStoreApiService], (service: LinuxStoreApiService) => {
    expect(service).toBeTruthy();
  }));
});
