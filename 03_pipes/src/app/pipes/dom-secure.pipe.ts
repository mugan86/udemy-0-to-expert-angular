import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domsecure'
})
export class DomSecurePipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) { }

  transform(value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
