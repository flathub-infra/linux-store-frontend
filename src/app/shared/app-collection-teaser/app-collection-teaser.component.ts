import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

import { App } from '../../shared/app.model';

@Component({
  selector: 'store-app-collection-teaser',
  templateUrl: './app-collection-teaser.component.html',
  styleUrls: ['./app-collection-teaser.component.scss']
})
export class AppCollectionTeaserComponent implements OnInit, OnChanges {

  @ViewChild('applist', { read: ElementRef }) private elementView: ElementRef;

  @Input() collectionId: string;
  @Input() collectionTitle: string;
  @Input() collectionList: App[];

  appsToShow: App[];
  numCols: number = 2;
  columnWidth: number = 190;
  minCols: number = 2;

  @Output('seemore')
  seemore: EventEmitter<string> = new EventEmitter<string>();

  @Output('seeapp')
  seeapp: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    this.updateNumCols();
    this.updateAppsToShow();
  }

  onResize(event) {
    this.updateNumCols();
    this.updateAppsToShow();
  }

  onSeeMore() {
    this.seemore.emit(this.collectionId);
  }

  gotoDetail(flatpakAppId: string): void {
    this.seeapp.emit(flatpakAppId);
  }

  updateNumCols(){
    var componentWidth: number = this.elementView.nativeElement.clientWidth;
    this.numCols = Math.max(this.minCols, Math.floor(componentWidth / this.columnWidth));
    //console.log("updateNumCols:" + this.numCols + " componentWidth:" + componentWidth);
  }

  updateAppsToShow() {
    if (this.collectionList) {
      var numberAppsToShow = Math.min(this.collectionList.length, this.numCols);
      this.appsToShow = this.collectionList.slice(0, numberAppsToShow);
    }
  }

}
