import { Component, OnInit} from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { App } from '../../shared/app.model';
import { LinuxStoreApiService } from '../../linux-store-api.service';

@Component({
  selector: 'linux-store-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  @ViewChild('applist', {read: ElementRef}) private elementView: ElementRef;

  apps: App[];
  selectedApp: App;
  errorMessage: string;
  numCols: number;
  columnWidth: number = 160;

  constructor(
    private router: Router,
    private linuxStoreApiService: LinuxStoreApiService) {
  }

  ngOnInit() {
    this.getApps();
    this.updateNumCols();
  }

  onResize(event) {
    this.updateNumCols();
  }

  updateNumCols() {
    var width: number = this.elementView.nativeElement.clientWidth;
    this.numCols = Math.max(1, Math.floor(width / this.columnWidth));
  }

  getApps(): void {
    this.linuxStoreApiService.getApps()
      .then(
      apps => this.apps = apps,
      error => this.errorMessage = <any>error);
  }

  onSelect(app: App): void {
    this.selectedApp = app;
  }

  gotoDetail(flatpakAppId: string): void {
    this.router.navigate(['apps/details', flatpakAppId]);
  }

  isSelected(app: App): boolean {
    if (!app || !this.selectedApp) {
      return false;
    }
    return app.flatpakAppId === this.selectedApp.flatpakAppId;
  }
}
