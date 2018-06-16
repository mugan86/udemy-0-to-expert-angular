import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    const keys = [];
    // tslint:disable-next-line:forin
    for (const key in value ) {
      keys.push(key);
    }
    return keys;
  }

}
