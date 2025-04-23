import { TestBed } from '@angular/core/testing';

import { AdvertiserService } from './advertiser.service';

describe('AdvertiserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertiserService = TestBed.get(AdvertiserService);
    expect(service).toBeTruthy();
  });
});
