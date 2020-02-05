import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength: number): any {
    return value.length > maxLength
      ? value.substring(0, maxLength) + '...'
      : value;
  }
}
