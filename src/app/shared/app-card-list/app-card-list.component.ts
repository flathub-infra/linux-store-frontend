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

  ngOnInit() {
    // console.log("AppCardList onInit");
    if (!this.minCols) {
      this.minCols = 2;
    }
    if (!this.colWidth) {
      this.colWidth = 190;
    }
    this.updateNumCols();
  }

  ngOnChanges() {
    this.updateNumCols();
    this.updateAppsToShow();
  }

  onResize(event) {
    // console.log("AppCardList onResize");
    this.updateNumCols();
    this.updateAppsToShow();
  }

  updateNumCols() {
    if (!this.cols) {
      const componentWidth: number = this.elementView.nativeElement.clientWidth;
      // console.log("AppCardList componentWidth:" + componentWidth);
      this.calculatedNumCols = Math.max(this.minCols, Math.floor(componentWidth / this.colWidth));
    } else {
      this.calculatedNumCols = this.cols;
    }
    // console.log("AppCardList updatedNumCols:" + this.calculatedNumCols);
  }

  updateAppsToShow() {
    if (this.apps) {
      if (this.rows) {
        const numberAppsToShow = Math.min(this.apps.length, this.calculatedNumCols * this.rows);
        this.appsToShow = this.apps.slice(0, numberAppsToShow);
      } else {
        this.appsToShow = this.apps;
      }
    }
  }

  public showNewBadge(app: App): boolean {
    // const now: Date = new Date();
    // const then: Date = new Date(app.inStoreSinceDate);
    // const milliseconds = Math.abs(now.getTime() - then.getTime());
    // const millisecondsInDay = 1000 * 3600 * 24;
    // const days = Math.ceil(milliseconds / millisecondsInDay);
    // if (days < 7) {
    //   return true;
    // } else {
    //   return false;
    // }
    return false;
  }
}
