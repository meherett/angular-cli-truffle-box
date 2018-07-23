import { TestBed, inject } from '@angular/core/testing';

import { MetacoinService } from './metacoin.service';
import { Web3Service } from '../web3/web3.service';

describe('MetacoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetacoinService, Web3Service]
    });
  });

  it('should be created', inject([MetacoinService], (service: MetacoinService) => {
    expect(service).toBeTruthy();
  }));
});
