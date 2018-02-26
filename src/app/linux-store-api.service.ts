import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { catchError, map, tap } from 'rxjs/operators';
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";


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

    let request = '/apps/'.concat(flatpakAppId);

    if (this.appDetailsCache[request] == null) {
      return this.http.get<App>(this.baseUrl.concat(request))
        .pipe(
          tap(app => { this.appDetailsCache[request] = app; }),
          catchError(this.handleError('getApp', null))
        );
    }
    else {
      return Observable.of(this.appDetailsCache[request]);
    }
  }


  getEmptyApps(): Observable<App[]> {
    return Observable.of(EMPTYAPPS);
  }

  getMockApps(): Observable<App[]> {
    return Observable.of(APPS);
  }

  getApps(): Observable<App[]> {

    let request = '/apps';

    if (this.appListCache[request] == null) {
      return this.http.get<App[]>(this.baseUrl.concat(request))
        .pipe(
          tap(apps => { this.appListCache[request] = apps; }),
          catchError(this.handleError('getApps', []))
        );

    }
    else {
      return Observable.of(this.appListCache[request]);
    }
  }

  getAppsByCategory(categoryId: string): Observable<App[]> {

    if (categoryId === 'All') {
      return this.getApps();
    }
    else {

      let request = '/apps/category/'.concat(categoryId);

      if (this.appListCache[request] == null) {
        return this.http.get<App[]>(this.baseUrl.concat(request))
          .pipe(
            tap(apps => { this.appListCache[request] = apps; }),
            catchError(this.handleError('getApps', []))
          );

      }
      else {
        return Observable.of(this.appListCache[request]);
      }

    }

  }

  getAppsByKeyword(keyword: string): Observable<App[]> {

    if (keyword.trim() == null || keyword.trim().length < 2) {
      return Observable.of(new Array<App>());
    }
    else {
      return this.getApps()
        .map(apps => apps.filter(app => (app.name.toLowerCase().indexOf(keyword.toLowerCase()) != -1)
          || (app.summary.toLowerCase().indexOf(keyword.toLowerCase()) != -1)));
    }
  }


  getAppsByCollectionId(collectionId: string): Observable<App[]> {

    if (collectionId === 'recently-updated') {
      return Observable.of(RECENTLYUPDATEDAPPS);
    } else if (collectionId === 'popular') {
      return Observable.of(POPULARAPPS);
    }
    else if (collectionId === 'editors-choice-apps') {
      return Observable.of(EDITORSCHOICEAPPS);
    }
    else if (collectionId === 'editors-choice-games') {
      return Observable.of(EDITORSCHOICEGAMES);
    }
    else return this.getApps();
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.getCategories()
      .map(category => category.find(category => category.id === categoryId));
  }

  getCategories(): Observable<Category[]> {
    return Observable.of(CATEGORIES);
  }

  getCollection(collectionId: string): Observable<Collection> {
    return this.getFeaturedCollections()
      .map(collection => collection.find(collection => collection.id === collectionId));
  }

  getFeaturedCollections(): Observable<Collection[]> {
    return Observable.of(FEATUREDCOLLECTIONS);
  }


  getAllReviews(): Observable<Review[]> {
    return Observable.of(REVIEWS);
  }

  getReviews(app_id: string): Observable<Review[]> {
    return this.getAllReviews()
      .map(reviews => reviews.filter(review => review.app_id === app_id));
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
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return Observable.of(result as T);
    };
  }

}
