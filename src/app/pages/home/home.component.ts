import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { App } from '../../shared/app.model';
import { LinuxStoreApiService } from '../../linux-store-api.service';

@Component({
  selector: 'store-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  recentlyUpdatedCollectionId: string = "recently-updated";
  recentlyUpdatedCollectionTitle: string = "New & Updated Apps";
  recentlyUpdatedCollectionList: App[];

  popularCollectionId: string = "popular";
  popularCollectionTitle: string = "Popular Apps & Games";
  popularCollectionList: App[];

  editorsChoiceAppsCollectionId: string = "editors-choice-apps";
  editorsChoiceAppsCollectionTitle: string = "Editor's Choice Apps";
  editorsChoiceAppsCollectionList: App[];

  editorsChoiceGamesCollectionId: string = "editors-choice-games";
  editorsChoiceGamesCollectionTitle: string = "Editor's Choice Games";
  editorsChoiceGamesCollectionList: App[];

  numCols: number;
  columnWidth: number = 170;
  minCols: number = 2;

  constructor(
    private router: Router,
    private linuxStoreApiService: LinuxStoreApiService) {
  }


  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.linuxStoreApiService.getAppsByCollectionId(this.recentlyUpdatedCollectionId)
      .subscribe(apps => {
        this.recentlyUpdatedCollectionList = apps;
      });

    this.linuxStoreApiService.getAppsByCollectionId(this.popularCollectionId)
      .subscribe(apps => {
        this.popularCollectionList = apps;
      });

    this.linuxStoreApiService.getAppsByCollectionId(this.editorsChoiceAppsCollectionId)
      .subscribe(apps => {
        this.editorsChoiceAppsCollectionList = apps;
      });

    this.linuxStoreApiService.getAppsByCollectionId(this.editorsChoiceGamesCollectionId)
      .subscribe(apps => {
        this.editorsChoiceGamesCollectionList = apps;
      });

  }

  onShowAppDetails(app: App) {
    this.router.navigate(['apps/details', app.flatpakAppId]);
  }

  onShowCollection(collectionId: string) {
    this.router.navigate(['apps']);
  }


}
