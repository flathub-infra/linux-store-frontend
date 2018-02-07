import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { App } from '../../shared/app.model';
import { LinuxStoreApiService } from '../../linux-store-api.service';

@Component({
  selector: 'linux-store-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  apps: App[];

  constructor(
    private router: Router,
    private linuxStoreApiService: LinuxStoreApiService) {
    }

    ngOnInit() {

      this.getApps();

      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0)
      });
    }

    getApps(): void {

      this.linuxStoreApiService.getApps()
      .subscribe(apps => { this.apps = apps; });

    }

    onShowAppDetails(app: App) {
      this.router.navigate(['apps/details', app.flatpakAppId]);
    }

  }
