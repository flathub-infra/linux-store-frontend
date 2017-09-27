import { Component, OnInit, Input } from '@angular/core';

import { App } from '../../shared/app.model';


@Component({
  selector: 'store-app-details-description',
  templateUrl: './app-details-description.component.html',
  styleUrls: ['./app-details-description.component.scss']
})
export class AppDetailsDescriptionComponent implements OnInit {

  @Input() app: App;

  constructor() { }

  ngOnInit() {
  }

}
