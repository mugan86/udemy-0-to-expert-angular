import { Pipe, PipeTransform } from '@angular/core';
import { DomSecurePipe } from './dom-secure.pipe';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  /**
   * Return correctly youtube video player embed to ready to show in template
   * @param value Youtube Video ID value
   * @example If take https://www.youtube.com/watch?v=UZFeOJHGU_Y video, the pass value is 'UZFeOJHGU_Y'
   */
  transform(value: any): any {
    return new DomSecurePipe(this.domSanitizer).transform(value, 'https://www.youtube.com/embed/') ;
  }

}
