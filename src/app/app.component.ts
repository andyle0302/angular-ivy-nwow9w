import { Component, VERSION, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  public filterText: string = 'Angular rocks';
  textToShowAsResult = 'Text to be highlighted: Angular 13 Rocks!!!';

  getHighlighterClass(): string {
    return "'highlighter'";
  }
}
