import { TestBed, inject } from '@angular/core/testing';

import { LocalApiService } from './local-api.service';

describe('LocalApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalApiService]
    });
  });

  it('should be created', inject([LocalApiService], (service: LocalApiService) => {
    expect(service).toBeTruthy();
  }));
});
