import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/*
In the decorator we define the name of the Pipe
*/
@Pipe({
  name: 'highlighter',
})
export class HighlighterPipe implements PipeTransform {
  // a Pipe must implement PipTransform ... not a lot of choice here

  /*
   text: the text that contains the string to be searched for
   search: the text to be found
   cssClass: we created a styling class to highlight the text, this can be overriden
  */
  transform(
    originalText: string,
    textToFind,
    cssClass: string = 'highlighter'
  ): string {
    // check the parameters, if something is missing we simply return the original text

    if (typeof originalText !== 'string' || !textToFind) {
      return originalText;
    }

    const pattern = textToFind
      .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
      .split(' ')
      .filter((t) => t.length > 0)
      .join('|');

    const regex = new RegExp(pattern, 'gi');

    let result = textToFind
      ? originalText.replace(
          regex,
          (match) => `<span class=${cssClass}">${match}</span>`
        )
      : originalText;

    return result; // no need to sanitize
  }
}
