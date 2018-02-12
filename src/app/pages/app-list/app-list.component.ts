import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { App } from '../../shared/app.model';
import { Collection } from '../../shared/collection.model';
import { LinuxStoreApiService } from '../../linux-store-api.service';
import { Category } from '../../shared/category.model';

@Component({
  selector: 'linux-store-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  apps: App[];
  categories: Category[];
  selectedCategory: Category;
  selectedCollection: Collection;
  featuredCollections: Collection[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private linuxStoreApiService: LinuxStoreApiService) {
  }

  ngOnInit() {

    this.getCategories();
    this.getFeaturedCollections();

    this.route.params.forEach((params: Params) => {

      var categoryId: string = params['categoryId'];
      var collectionId: string = params['collectionId'];

      if (collectionId) {
        this.showAppsByCollectionId(collectionId);
      }
      else if (categoryId) {
        this.showAppsByCategoryId(categoryId);
      }


    });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  getTitle(): string {

    var title: string = "All applications";

    if (this.selectedCollection) {
      title = this.selectedCollection.name;
    }
    else if (this.selectedCategory) {
      title = this.selectedCategory.name;
    }

    return title;
  }

  getCategories(): void {
    this.linuxStoreApiService.getCategories()
      .subscribe(categories => { this.categories = categories; });
  }

  getFeaturedCollections() {
    this.linuxStoreApiService.getFeaturedCollections()
      .subscribe(collections => {
        this.featuredCollections = collections;
      });
  }


  showAppsByCollectionId(collectionId: string): void {

    this.linuxStoreApiService.getCollection(collectionId)
      .subscribe(collection => { this.selectedCollection = collection; });

    this.linuxStoreApiService.getAppsByCollectionId(collectionId)
      .subscribe(apps => { this.apps = apps; });
  }

  showAllApps(): void {
    this.linuxStoreApiService.getApps()
      .subscribe(apps => { this.apps = apps; });
  }

  showAppsByCategoryId(categoryId: string): void {

    this.linuxStoreApiService.getCategory(categoryId)
      .subscribe(category => { this.selectedCategory = category; });

    this.linuxStoreApiService.getAppsByCategory(categoryId)
      .subscribe(apps => { this.apps = apps; });
  }

  getAppsByCollectionId(collectionId: string): App[] {
    var collectionApps: App[];
    this.linuxStoreApiService.getAppsByCollectionId(collectionId)
      .subscribe(apps => {
        collectionApps = apps;
      });
    return collectionApps;
  }

  onShowAppDetails(app: App) {
    this.router.navigate(['apps/details', app.flatpakAppId]);
  }

  onShowCollection(collectionId: string) {
    this.router.navigate(['apps/collection', collectionId]);
  }


}
