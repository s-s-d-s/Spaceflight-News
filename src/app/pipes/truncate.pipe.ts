import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  readonly defaultTrailString: string = '...'

  transform(value: string, limit: number = 100, trail: string = this.defaultTrailString): string {
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
