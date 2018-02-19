import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { App } from '../../shared/app.model';
import { Collection } from '../../shared/collection.model';
import { LinuxStoreApiService } from '../../linux-store-api.service';
import { Category } from '../../shared/category.model';
import { debug } from 'util';

@Component({
  selector: 'linux-store-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  @ViewChild('drawer') drawer;

  apps: App[];
  categories: Category[];
  selectedCategory: Category;
  selectedCollection: Collection;
  featuredCollections: Collection[];
  showDefaultInfo: boolean = false;
  showAppsByCategory: boolean = false;
  paramCategoryId: string;
  paramCollectionId: string;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private linuxStoreApiService: LinuxStoreApiService) {
  }

  ngOnInit() {

    this.getCategories();
    this.getFeaturedCollections();

    this.route.paramMap.subscribe(
      params => {
        this.paramCategoryId = params.get('categoryId');
        this.paramCollectionId = params.get('collectionId');
        if (this.isSmallScreen() || this.drawer.opened) this.showAppsByParams();
      }
    );

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  isSmallScreen(): boolean{
    return this.breakpointObserver.isMatched('(max-width: 599px)');
  }

  getTitle(): string {

    var title: string = "";

    if (this.selectedCollection) {
      title = this.selectedCollection.name;
    }
    else if (this.selectedCategory) {
      title = this.selectedCategory.name;
    }
    else {
      title = "All applications";
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

  showAppsByParams() {

    if (this.paramCollectionId) {
      this.showAppsByCollectionId(this.paramCollectionId);
      this.showDefaultInfo = false;
    }
    else if (this.paramCategoryId) {
      this.showAppsByCategoryId(this.paramCategoryId);
      this.showDefaultInfo = false;
    }
    else {
      this.showDefaultInfo = true;
    }
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

  onOpenedChange(event) {
    this.showAppsByParams();
  }

  onShowAppDetails(app: App) {
    this.router.navigate(['apps/details', app.flatpakAppId]);
  }

  onShowCollection(collectionId: string) {
    this.router.navigate(['apps/collection', collectionId]);
  }

  onDrawerLinkClick(){
    if(this.isSmallScreen()) this.drawer.close();
  }

}
