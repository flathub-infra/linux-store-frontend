import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { App } from '../shared/app.model';
import { FlathubApiService} from '../flathub-api.service';

@Component({
  selector: 'flathub-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  apps: App[];
  selectedApp: App;

  constructor(
    private router: Router,
    private flathubApiService: FlathubApiService) {
  }

  getApps(): void {
    this.flathubApiService.getApps().then(apps => this.apps = apps);
  }

  ngOnInit() {
    this.getApps();
  }

  onSelect(app: App): void {
    console.log('SelectedApp = ' + app.id);
    this.selectedApp = app;
  }

  gotoDetail(id: string): void {
    this.router.navigate(['apps/details', id]);
  }

  isSelected(app: App): boolean {

    if (!app || !this.selectedApp) {
       console.log('isSelected' + false);
      return false;
    }
     console.log('isSelected' + (app.id === this.selectedApp.id));
    return app.id === this.selectedApp.id;
  }
}
