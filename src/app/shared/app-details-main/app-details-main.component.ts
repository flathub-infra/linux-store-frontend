import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { App } from '../../shared/app.model';

@Component({
  selector: 'store-app-details-main',
  templateUrl: './app-details-main.component.html',
  styleUrls: ['./app-details-main.component.scss']
})
export class AppDetailsMainComponent implements OnInit {

  @Input() app: App;

  @Output('install') install: EventEmitter<App> = new EventEmitter<App>();

  showInstallInstructions = false;

  constructor() { }

  ngOnInit() {
  }

  onInstall() {
    this.install.emit(this.app);
  }

}
