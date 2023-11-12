import { TestBed } from '@angular/core/testing';

import { DataMapperService } from './data-mapper.service';

describe('DataMapperService', () => {
  let service: DataMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
