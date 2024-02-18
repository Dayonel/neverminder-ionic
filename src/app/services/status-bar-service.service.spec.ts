import { TestBed } from '@angular/core/testing';

import { StatusBarServiceService } from './status-bar-service.service';

describe('StatusBarServiceService', () => {
  let service: StatusBarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusBarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
