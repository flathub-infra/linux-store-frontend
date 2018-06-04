import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SeoService } from '../../seo.service';

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

  @ViewChild('drawer') drawer;

  apps: App[];
  categories: Category[];
  selectedCategory: Category;
  selectedCollection: Collection;
  featuredCollections: Collection[];
  showDefaultInfo = false;
  showAppsByCategory = false;
  paramCategoryId: string;
  paramCollectionId: string;
  paramSearchKeyword: string;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private linuxStoreApiService: LinuxStoreApiService,
    private seoService: SeoService) {
  }

  ngOnInit() {
    this.getCategories();
    this.getFeaturedCollections();

    this.route.paramMap.subscribe(
      params => {
        this.paramCategoryId = params.get('categoryId');
        this.paramCollectionId = params.get('collectionId');
        this.paramSearchKeyword = params.get('searchKeyword');
        if (this.isSmallScreen() || this.drawer.opened) {
          this.showAppsByParams();
        }
      }
    );

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  isSmallScreen(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 599px)');
  }

  getTitle(): string {
    let title = '';

    if (this.selectedCollection) {
      title = this.selectedCollection.name;
    } else if (this.selectedCategory) {
      title = this.selectedCategory.name;
    } else {
      title = 'All applications';
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
    if (this.paramSearchKeyword) {
      this.showAppsSearchKeyword(this.paramSearchKeyword);
      this.showDefaultInfo = false;
    } else if (this.paramCollectionId) {
      this.showAppsByCollectionId(this.paramCollectionId);
      this.showDefaultInfo = false;
    } else if (this.paramCategoryId) {
      this.showAppsByCategoryId(this.paramCategoryId);
      this.showDefaultInfo = false;
    } else {
      this.showDefaultInfo = true;
    }
  }

  showAppsSearchKeyword(searchKeyword: string): void {
    const searchCollection = new Collection();
    searchCollection.id = 'search';
    searchCollection.name = 'Search';
    searchCollection.shortname = 'Search';
    searchCollection.summary = 'Search apps by keyword';

    this.selectedCollection = searchCollection;

    this.seoService.setPageMetadata('Search results',
      'Search applications in Flathub by keyword');

    this.linuxStoreApiService.getAppsByKeyword(searchKeyword)
      .subscribe(apps => { this.apps = apps; });
  }

  showAppsByCollectionId(collectionId: string): void {

    this.linuxStoreApiService.getCollection(collectionId)
      .subscribe(collection => { this.selectedCollection = collection; });

    if (this.selectedCollection) {
      this.seoService.setPageMetadata(this.selectedCollection.name, this.selectedCollection.name);
    }

    this.linuxStoreApiService.getAppsByCollectionId(collectionId)
      .subscribe(apps => { this.apps = apps; });
  }

  showAllApps(): void {

    this.seoService.setPageMetadata('All applications', 'All applications in Flathub');

    this.linuxStoreApiService.getApps()
      .subscribe(apps => { this.apps = apps; });
  }

  showAppsByCategoryId(categoryId: string): void {

    this.linuxStoreApiService.getCategory(categoryId)
      .subscribe(category => { this.selectedCategory = category; });

    if (this.selectedCategory) {
      this.seoService.setPageMetadata(this.selectedCategory.name, this.selectedCategory.name);
    }
    else if (categoryId = 'All') {
      this.seoService.setPageMetadata('All applications', 'All applications in Flathub');
    }

    this.linuxStoreApiService.getAppsByCategory(categoryId)
      .subscribe(apps => { this.apps = apps; });
  }

  getAppsByCollectionId(collectionId: string): App[] {
    let collectionApps: App[];
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

  onDrawerLinkClick() {
    if (this.isSmallScreen()) {
      this.drawer.close();
    }
  }

}
