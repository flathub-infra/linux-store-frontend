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

  public getDownloadFlatpakRefUrl() {
    return window.location.href + this.app.downloadFlatpakRefUrl;
  }

}
