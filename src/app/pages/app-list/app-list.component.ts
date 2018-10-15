import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
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

  scrollPosition: [number, number];

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


  getFlathubMetaImage(): string {

    const imageUrl: string = window.location.protocol + '//' + window.location.hostname + ':' +
      window.location.port + '/assets/themes/flathub/flathub-screenshot.png'

    return imageUrl;
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
      this.seoService.setPageMetadata('Applications—Linux Apps on Flathub',
        'Browse applications for Linux on Flathub: Popular Apps and Games, Editor\'s picks, Audio & Video, ' +
        'Developer Tools, Education, Games, Graphics & Photography, Communication & News, Productivity, Science, Settings, Utilities, ...',
        this.getFlathubMetaImage());
    }

  }

  showAppsSearchKeyword(searchKeyword: string): void {
    const searchCollection = new Collection();
    searchCollection.id = 'search';
    searchCollection.name = 'Search';
    searchCollection.shortname = 'Search';
    searchCollection.summary = 'Search apps by keyword';

    this.selectedCollection = searchCollection;

    this.seoService.setPageMetadata('Search results—Linux Apps on Flathub',
      'Search applications published on Flathub', this.getFlathubMetaImage());

    this.linuxStoreApiService.getAppsByKeyword(searchKeyword)
      .subscribe(apps => { this.apps = apps; });
  }

  showAppsByCollectionId(collectionId: string): void {

    this.linuxStoreApiService.getCollection(collectionId)
      .subscribe(collection => { this.selectedCollection = collection; });

    if (this.selectedCollection) {
      this.seoService.setPageMetadata(this.selectedCollection.name + '—Linux Apps on Flathub',
        'Find ' + this.selectedCollection.name + ' for Linux on Flathub', this.getFlathubMetaImage());
    }

    this.linuxStoreApiService.getAppsByCollectionId(collectionId)
      .subscribe(apps => { this.apps = apps; });
  }

  showAllApps(): void {

    this.seoService.setPageMetadata('All applications—Linux Apps on Flathub',
      'Find all applications for Linux on Flathub', this.getFlathubMetaImage());

    this.linuxStoreApiService.getApps()
      .subscribe(apps => { this.apps = apps; });
  }

  showAppsByCategoryId(categoryId: string): void {

    this.linuxStoreApiService.getCategory(categoryId)
      .subscribe(category => { this.selectedCategory = category; });

    if (this.selectedCategory) {
      this.seoService.setPageMetadata(this.selectedCategory.name + '—Linux Apps on Flathub',
        'Find ' + this.selectedCategory.name + ' Apps for Linux on Flathub', this.getFlathubMetaImage());
    }
    else if (categoryId = 'All') {
      this.seoService.setPageMetadata('All applications—Linux Apps on Flathub',
        'Find all applications for Linux on Flathub', this.getFlathubMetaImage());
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

  onDrawerLinkClick() {
    if (this.isSmallScreen()) {
      this.drawer.close();
    }
  }

}
