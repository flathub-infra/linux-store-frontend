import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from './../environments/environment';

import { EMPTYAPPS } from './shared/empty-apps';
import { CATEGORIES } from './shared/categories';
import { APPS } from './shared/mock-apps';
import { App } from './shared/app.model';
import { Collection } from './shared/collection.model';
import { FEATUREDCOLLECTIONS } from './shared/featured-collections';
import { Category } from './shared/category.model';
import { Review } from './shared/review.model';
import { REVIEWS } from './shared/mock-reviews';

interface HashTable<T> {
  [key: string]: T;
}

const COLLECTION_DEFAULT_LIMIT = 50;

@Injectable()
export class LinuxStoreApiService {
  private baseUrl = environment.apiUrl; // URL to web api
  private appListCache: HashTable<App[]> = {};
  private appDetailsCache: HashTable<App> = {};
  private performingRequest: HashTable<boolean> = {};

  constructor(private http: HttpClient) {}

  getApp(flatpakAppId: string): Observable<App> {
    const request = `${this.baseUrl}/apps/${flatpakAppId}`;

    if (
      this.appDetailsCache[request] == null &&
      !this.performingRequest[request]
    ) {
      this.performingRequest[request] = true;
      return this.http.get<App>(request).pipe(
        tap((app) => {
          this.appDetailsCache[request] = app;
          this.performingRequest[request] = false;
        }),
        catchError(this.handleError(request, null))
      );
    } else {
      return of(this.appDetailsCache[request]);
    }
  }

  getEmptyApps(): Observable<App[]> {
    return of(EMPTYAPPS);
  }

  getMockApps(): Observable<App[]> {
    return of(APPS);
  }

  getApps(): Observable<App[]> {
    const request = `${this.baseUrl}/apps`;

    if (
      this.appListCache[request] == null &&
      !this.performingRequest[request]
    ) {
      this.performingRequest[request] = true;
      return this.http.get<App[]>(request).pipe(
        tap((apps) => {
          this.appListCache[request] = apps;
          this.performingRequest[request] = false;
        }),
        catchError(this.handleError(request, []))
      );
    } else {
      return of(this.appListCache[request]);
    }
  }

  getAppsByCategory(categoryId: string): Observable<App[]> {
    if (categoryId === 'All') {
      return this.getApps();
    } else {
      const request = `${this.baseUrl}/apps/category/${categoryId}`;

      if (
        this.appListCache[request] == null &&
        !this.performingRequest[request]
      ) {
        this.performingRequest[request] = true;
        return this.http.get<App[]>(request).pipe(
          tap((apps) => {
            this.appListCache[request] = apps;
            this.performingRequest[request] = false;
          }),
          catchError(this.handleError('getApps', []))
        );
      } else {
        return of(this.appListCache[request]);
      }
    }
  }

  getAppsBySearchQuery(searchQuery: string): Observable<App[]> {
    const request = `${this.baseUrl}/apps/search/${searchQuery}`;

    if (
      this.appListCache[request] == null &&
      !this.performingRequest[request]
    ) {
      this.performingRequest[request] = true;
      return this.http.get<App[]>(request).pipe(
        tap((apps) => {
          this.appListCache[request] = apps;
          this.performingRequest[request] = false;
        }),
        catchError(this.handleError(request, []))
      );
    } else {
      return of(this.appListCache[request]);
    }
  }

  getAppsByCollectionId(collectionId: string): Observable<App[]> {
    const popularAppsUrl: string = `${this.baseUrl}/apps/collection/popular`;
    const editorPicksGamesUrl: string = `${this.baseUrl}/apps/collection/games`;
    const editorPicksAppsUrl: string = `${this.baseUrl}/apps/collection/apps`;
    const recentlyUpdatedUrl: string = `${this.baseUrl}/apps/collection/recently-updated`;

    if (collectionId === 'recently-updated') {
      return this.getCollectionApps(
        recentlyUpdatedUrl,
        COLLECTION_DEFAULT_LIMIT
      );
    } else if (collectionId === 'popular') {
      return this.getCollectionApps(popularAppsUrl, COLLECTION_DEFAULT_LIMIT);
    } else if (collectionId === 'editors-choice-apps') {
      return this.getCollectionApps(
        editorPicksAppsUrl,
        COLLECTION_DEFAULT_LIMIT
      );
    } else if (collectionId === 'editors-choice-games') {
      return this.getCollectionApps(
        editorPicksGamesUrl,
        COLLECTION_DEFAULT_LIMIT
      );
    } else {
      return this.getApps();
    }
  }

  getCollectionApps(collectionUrl: string, limit?: number): Observable<App[]> {
    const request = limit > 0 ? `${collectionUrl}/${limit}` : collectionUrl;

    if (
      this.appListCache[request] == null &&
      !this.performingRequest[request]
    ) {
      this.performingRequest[request] = true;
      return this.http.get<App[]>(collectionUrl).pipe(
        tap((apps) => {
          this.appListCache[request] = apps;
          this.performingRequest[request] = false;
        }),
        catchError(this.handleError(collectionUrl, []))
      );
    } else {
      return of(this.appListCache[request]);
    }
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.getCategories().pipe(
      map((category) =>
        category.find((_category) => _category.id === categoryId)
      )
    );
  }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getCollection(collectionId: string): Observable<Collection> {
    return this.getFeaturedCollections().pipe(
      map((collection) =>
        collection.find((_collection) => _collection.id === collectionId)
      )
    );
  }

  getFeaturedCollections(): Observable<Collection[]> {
    return of(FEATUREDCOLLECTIONS);
  }

  getAllReviews(): Observable<Review[]> {
    return of(REVIEWS);
  }

  getReviews(app_id: string): Observable<Review[]> {
    return this.getAllReviews().pipe(
      map((reviews) => reviews.filter((review) => review.app_id === app_id))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'getApps', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Error while handling operation: ${operation}`, error);

      return of(result as T);
    };
  }
}
