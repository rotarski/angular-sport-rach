import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitazeHtml'
})
export class SanitazeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(value: string): unknown {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
