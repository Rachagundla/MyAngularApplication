import { TestBed } from '@angular/core/testing';

import { MyQuoteServiceService } from './my-quote-service.service';

describe('MyQuoteServiceService', () => {
  let service: MyQuoteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyQuoteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
