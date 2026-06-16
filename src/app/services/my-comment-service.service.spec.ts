import { TestBed } from '@angular/core/testing';

import { MyCommentServiceService } from './my-comment-service.service';

describe('MyCommentServiceService', () => {
  let service: MyCommentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCommentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
