import { TestBed } from '@angular/core/testing';

import { MyFireDBService } from './my-fire-db.service';

describe('MyFireDBService', () => {
  let service: MyFireDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFireDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
