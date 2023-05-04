import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toShorten',
})
export class ToShortenPipe implements PipeTransform {
  transform(description: string, max: number): string {
    if (description.length > max) {
      return description.substr(0, max) + '.....';
    }
    return description;
  }
}
