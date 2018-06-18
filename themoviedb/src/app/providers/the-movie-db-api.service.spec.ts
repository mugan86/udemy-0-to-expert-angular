import { TestBed, inject } from '@angular/core/testing';

import { TheMovieDbApiService } from './the-movie-db-api.service';

describe('TheMovieDbApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheMovieDbApiService]
    });
  });

  it('should be created', inject([TheMovieDbApiService], (service: TheMovieDbApiService) => {
    expect(service).toBeTruthy();
  }));
});
