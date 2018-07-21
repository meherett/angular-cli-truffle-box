import { TestBed, inject } from '@angular/core/testing';

import { MetacoinService } from './metacoin.service';

describe('MetacoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetacoinService]
    });
  });

  it('should be created', inject([MetacoinService], (service: MetacoinService) => {
    expect(service).toBeTruthy();
  }));
});
