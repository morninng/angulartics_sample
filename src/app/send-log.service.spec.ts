import { TestBed, inject } from '@angular/core/testing';

import { SendLogService } from './send-log.service';

describe('SendLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendLogService]
    });
  });

  it('should be created', inject([SendLogService], (service: SendLogService) => {
    expect(service).toBeTruthy();
  }));
});
