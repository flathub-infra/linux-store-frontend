import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { environment } from './../environments/environment';

import { EMPTYAPPS } from './shared/empty-apps';
import { RECENTLYUPDATEDAPPS } from './shared/recently-updated-apps';
import { POPULARAPPS } from './shared/popular-apps';
import { EDITORSCHOICEAPPS } from './shared/editors-choice-apps';
import { EDITORSCHOICEGAMES } from './shared/editors-choice-games';
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

@Injectable()
export class LinuxStoreApiService {

  private baseUrl = environment.apiUrl;  // URL to web api
  private appListCache: HashTable<App[]> = {};
  private appDetailsCache: HashTable<App> = {};

  constructor(private http: HttpClient) { }

  getApp(flatpakAppId: string): Observable<App> {
    const request = `/apps/${flatpakAppId}`;

    if (this.appDetailsCache[request] == null) {
      return this.http.get<App>(`${this.baseUrl}${request}`)
        .pipe(
          tap(app => { this.appDetailsCache[request] = app; }),
          catchError(this.handleError('getApp', null))
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
    const request = '/apps';

    if (this.appListCache[request] == null) {
      return this.http.get<App[]>(`${this.baseUrl}${request}`)
        .pipe(
          tap(apps => { this.appListCache[request] = apps; }),
          catchError(this.handleError('getApps', []))
        );
    } else {
      return of(this.appListCache[request]);
    }
  }

  getAppsByCategory(categoryId: string): Observable<App[]> {
    if (categoryId === 'All') {
      return this.getApps();
    } else {
      const request = `/apps/category/${categoryId}`;

      if (this.appListCache[request] == null) {
        return this.http.get<App[]>(`${this.baseUrl}${request}`)
          .pipe(
            tap(apps => { this.appListCache[request] = apps; }),
            catchError(this.handleError('getApps', []))
          );
      } else {
        return of(this.appListCache[request]);
      }
    }
  }

  getAppsByKeyword(keyword: string): Observable<App[]> {
    if (keyword.trim() == null || keyword.trim().length < 2) {
      return of(new Array<App>());
    } else {
      return this.getApps()
        .pipe(
          map(apps => apps.filter(app => (app.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
            || (app.summary.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
            || (app.flatpakAppId.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
          ))
        );
    }
  }

  getAppsByCollectionId(collectionId: string): Observable<App[]> {
    if (collectionId === 'recently-updated') {
      return this.getRecentlyUpdatedApps();
    } else if (collectionId === 'popular') {
      return of(POPULARAPPS);
    } else if (collectionId === 'editors-choice-apps') {
      return of(EDITORSCHOICEAPPS);
    } else if (collectionId === 'editors-choice-games') {
      return of(EDITORSCHOICEGAMES);
    } else {
      return this.getApps();
    }
  }

  getRecentlyUpdatedApps(): Observable<App[]> {
    const request = '/apps/collection/recently-updated';

    if (this.appListCache[request] == null) {
      return this.http.get<App[]>(`${this.baseUrl}${request}`)
        .pipe(
          tap(apps => { this.appListCache[request] = apps; }),
          catchError(this.handleError('getApps', []))
        );
    } else {
      return of(this.appListCache[request]);
    }
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.getCategories()
      .pipe(
        map(category => category.find(category => category.id === categoryId))
      );
  }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getCollection(collectionId: string): Observable<Collection> {
    return this.getFeaturedCollections()
      .pipe(
        map(collection => collection.find(collection => collection.id === collectionId))
      );
  }

  getFeaturedCollections(): Observable<Collection[]> {
    return of(FEATUREDCOLLECTIONS);
  }

  getAllReviews(): Observable<Review[]> {
    return of(REVIEWS);
  }

  getReviews(app_id: string): Observable<Review[]> {
    return this.getAllReviews()
      .pipe(
        map(reviews => reviews.filter(review => review.app_id === app_id))
      );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
