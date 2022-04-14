import { TestBed } from '@angular/core/testing';

import { GetGifsService } from './get-gifs.service';

describe('GetGifsService', () => {
  let service: GetGifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
