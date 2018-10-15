import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { App } from '../../shared/app.model';
import { Collection } from '../../shared/collection.model';
import { LinuxStoreApiService } from '../../linux-store-api.service';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'store-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredCollections: Collection[];
  numCols: number;
  columnWidth = 170;
  minCols = 2;

  constructor(
    private router: Router,
    private linuxStoreApiService: LinuxStoreApiService,
    private seoService: SeoService) {

    this.setPageMetadata();

  }

  ngOnInit() {
    this.linuxStoreApiService.getFeaturedCollections()
      .subscribe(collections => {
        this.featuredCollections = collections;
      });
  }

  getAppsByCollectionId(collectionId: string): App[] {
    let collectionApps: App[];
    this.linuxStoreApiService.getAppsByCollectionId(collectionId)
      .subscribe(apps => {
        collectionApps = apps;
      });
    return collectionApps;
  }

  setPageMetadata() {
    const imageUrl: string = window.location.protocol + '//' + window.location.hostname + ':' +
      window.location.port + '/assets/themes/flathub/flathub-screenshot.png'

    this.seoService.setPageMetadata(
      'Flathub—An app store and build service for Linux',
      'Find and install hundreds of apps and games for Linux. Enjoy GIMP, GNU Octave, Spotify, Steam and many more!',
      imageUrl);
  }

}
