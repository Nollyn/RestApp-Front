import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'displayFilter'
})
export class DisplayFilterPipe implements PipeTransform {

  transform(arr: any[], key: string, value: any, display: string): string {
    try {
      const filtered = arr.filter(el => el[key] == value);
      if (filtered.length > 0) {
        let obj = filtered[0];
        if (obj.hasOwnProperty(display)) {
          return obj[display];
        }
      }
    } catch (e) {
      return 'unknown';
    }
    return 'unknown';
  }
}
