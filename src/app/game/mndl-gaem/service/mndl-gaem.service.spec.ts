import { TestBed, inject } from '@angular/core/testing';

import { MndlGaemService } from './mndl-gaem.service';

describe('MndlGaemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MndlGaemService]
    });
  });

  it('should ...', inject([MndlGaemService], (service: MndlGaemService) => {
    expect(service).toBeTruthy();
  }));
});
