import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

import { App } from '../../shared/app.model';


@Component({
  selector: 'store-app-card-list',
  templateUrl: './app-card-list.component.html',
  styleUrls: ['./app-card-list.component.scss']
})
export class AppCardListComponent implements OnInit, OnChanges {

  @ViewChild('applist', { read: ElementRef }) private elementView: ElementRef;

  @Input()
  apps: App[];

  @Input()
  rows: number;

  @Input()
  cols: number;

  @Input()
  minCols: number;

  @Input()
  colWidth: number;

  appsToShow: App[];
  calculatedNumCols: number;

  @Output('showAppDetails')
  showAppDetails: EventEmitter<App> = new EventEmitter<App>();

  constructor() { }

  ngOnInit() {
    if (!this.minCols) this.minCols = 2;
    if (!this.colWidth) this.colWidth = 190;
    this.updateNumCols();
  }

  ngOnChanges() {
    this.updateNumCols();
    this.updateAppsToShow();
  }

  onResize(event) {
    this.updateNumCols();
    this.updateAppsToShow();
  }

  onAppDetails(app: App): void {
    this.showAppDetails.emit(app);
  }

  updateNumCols() {
    if (!this.cols) {
      var componentWidth: number = this.elementView.nativeElement.clientWidth;
      this.calculatedNumCols = Math.max(this.minCols, Math.floor(componentWidth / this.colWidth));
    }
    else {
      this.calculatedNumCols = this.cols;
    }
  }

  updateAppsToShow() {
    if (this.apps) {
      if (this.rows) {
        var numberAppsToShow = Math.min(this.apps.length, this.calculatedNumCols * this.rows);
        this.appsToShow = this.apps.slice(0, numberAppsToShow);
      }
      else {
        this.appsToShow = this.apps;
      }
    }
  }

}
