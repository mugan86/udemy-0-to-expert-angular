import { YoutubePipe } from './youtube.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('YoutubePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DomSanitizer]
    });
  });
  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    // Pending and dom sanitizer
    const pipe = new YoutubePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
