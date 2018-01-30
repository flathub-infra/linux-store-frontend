import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { App } from '../../shared/app.model';


@Component({
  selector: 'store-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent implements OnInit {

  @Input() app: App;

  //@Output('install')
  //install: EventEmitter<App> = new EventEmitter<App>();

  constructor() { }

  ngOnInit() {
  }

  // onInstall() {
  //   this.install.emit(this.app);
  // }


}
