import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { App } from '../../shared/app.model';

@Component({
  selector: 'store-app-collection-teaser',
  templateUrl: './app-collection-teaser.component.html',
  styleUrls: ['./app-collection-teaser.component.scss']
})
export class AppCollectionTeaserComponent implements OnInit {

  @Input() collectionId: string;
  @Input() collectionTitle: string;
  @Input() collectionList: App[];

  @Output('showAppDetails')
  showAppDetails: EventEmitter<App> = new EventEmitter<App>();

  @Output('showCollection')
  showCollection: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onShowAppDetails(app: App): void {
    this.showAppDetails.emit(app);
  }

  onSeeMore(): void {
    this.showCollection.emit(this.collectionId);
  }

}
