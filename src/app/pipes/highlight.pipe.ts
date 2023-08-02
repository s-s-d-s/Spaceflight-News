import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string, partToHighlight: string): SafeHtml {

    if (!partToHighlight || !value) {
      return value;
    }

    const searchWords = partToHighlight.split(' ').filter(word => word.trim() !== '');

    if (!searchWords.length) {
      return value;
    }

    const highlightedPartRegExp = new RegExp(searchWords.join('|'), 'gi');

    const replacedValue: string = value.replace(highlightedPartRegExp, match => `<span class="highlight">${match}</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
  }
}
