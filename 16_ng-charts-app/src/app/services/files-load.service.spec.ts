import { TestBed, inject } from '@angular/core/testing';

import { FilesLoadService } from './files-load.service';

describe('FilesLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilesLoadService]
    });
  });

  it('should be created', inject([FilesLoadService], (service: FilesLoadService) => {
    expect(service).toBeTruthy();
  }));
});
