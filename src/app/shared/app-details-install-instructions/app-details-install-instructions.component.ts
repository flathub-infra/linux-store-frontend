import { Component, OnInit, Input } from '@angular/core';

import { App } from '../../shared/app.model';
@Component({
  selector: 'store-app-details-install-instructions',
  templateUrl: './app-details-install-instructions.component.html',
  styleUrls: ['./app-details-install-instructions.component.scss']
})
export class AppDetailsInstallInstructionsComponent implements OnInit {

  @Input() app: App;

  constructor() { }

  ngOnInit() {
  }

  copy(command: string) {
    const element: HTMLElement = document.getElementById(command);

    try {
      const selection = window.getSelection();
      const range = document.createRange();

      range.selectNodeContents(element);

      selection.removeAllRanges();
      selection.addRange(range);
    } catch (error) {
      console.warn('Could not select range. Your browser may not be supported.');
    }
    try {
      const status = document.execCommand('Copy');
      if (!status) {
        throw new Error();
      }
    } catch (error) {
      console.warn('Could not copy text. Your browser may not be supported.', error);
    }
  }

}
