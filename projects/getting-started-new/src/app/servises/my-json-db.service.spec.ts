import { TestBed } from '@angular/core/testing';

import { MyJsonDBService } from './my-json-db.service';

describe('MyJsonDBService', () => {
  let service: MyJsonDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyJsonDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
