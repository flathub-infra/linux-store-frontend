import { Component, Input, Output, EventEmitter } from '@angular/core';

import { App } from '../../shared/app.model';

@Component({
  selector: 'store-app-details-main',
  templateUrl: './app-details-main.component.html',
  styleUrls: ['./app-details-main.component.scss']
})
export class AppDetailsMainComponent {

  @Input() app: App;

  @Output('install') install: EventEmitter<App> = new EventEmitter<App>();

  showInstallInstructions = false;

  onInstall() {
    this.install.emit(this.app);
  }

}
