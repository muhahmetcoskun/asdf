import { TestBed } from '@angular/core/testing';

import { LastikOtelService } from './lastik-otel.service';

describe('LastikOtelService', () => {
  let service: LastikOtelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastikOtelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
