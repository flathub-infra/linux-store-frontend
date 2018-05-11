import { Component, OnInit, Input } from '@angular/core';

import { App } from '../../shared/app.model';
@Component({
  selector: 'store-app-details-install-instructions',
  templateUrl: './app-details-install-instructions.component.html',
  styleUrls: ['./app-details-install-instructions.component.scss']
})
export class AppDetailsInstallInstructionsComponent implements OnInit {

  @Input() app: App;

  installInstructions: string = '';
  runInstructions: string = '';

  constructor() { }

  ngOnInit() {

    if(this.app){
        this.installInstructions = 'flatpak install flathub ' +  this.app.flatpakAppId;
        this.runInstructions = 'flatpak run ' +  this.app.flatpakAppId;
    }
  }

}
