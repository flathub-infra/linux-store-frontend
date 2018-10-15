import { Component, Input, Output, EventEmitter } from '@angular/core';

import { App } from '../../shared/app.model';

@Component({
  selector: 'store-app-collection-teaser',
  templateUrl: './app-collection-teaser.component.html',
  styleUrls: ['./app-collection-teaser.component.scss']
})
export class AppCollectionTeaserComponent {

  @Input() collectionId: string;
  @Input() collectionTitle: string;
  @Input() collectionList: App[];
}
