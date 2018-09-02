import { TestBed, inject } from '@angular/core/testing';

import { LoadImagesService } from './load-images.service';

describe('LoadImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadImagesService]
    });
  });

  it('should be created', inject([LoadImagesService], (service: LoadImagesService) => {
    expect(service).toBeTruthy();
  }));
});
