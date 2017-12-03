import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { catchError, map, tap } from 'rxjs/operators';
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";


import { environment } from './../environments/environment';

import { EMPTYAPPS } from './shared/empty-apps';
import { APPS } from './shared/mock-apps';
import { App } from './shared/app.model';
import { Review } from './shared/review.model';
import { REVIEWS } from './shared/mock-reviews';

@Injectable()
export class LinuxStoreApiService {

  private baseUrl = environment.apiUrl;  // URL to web api
  //private headers = new Headers({ 'Content-Type': 'application/json' });

  private apps: Observable<App[]>;

  constructor(private http: HttpClient) { }

  getEmptyApps(): Observable<App[]> {
    return Observable.of(EMPTYAPPS);
  }

  getMockApps(): Observable<App[]> {
    return Observable.of(APPS);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getApps(): Observable<App[]> {

    if (!this.apps) {
      this.apps = this.http.get<App[]>(this.baseUrl).pipe(
        catchError(this.handleError('getApps', []))
      );
    }
    return this.apps;
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

  getApp(flatpakAppId: string): Observable<App> {
    return this.getApps()
    .map(apps => apps.find(app => app.flatpakAppId === flatpakAppId));
  }

  getAllReviews(): Observable<Review[]> {
    return Observable.of(REVIEWS);
  }

  getReviews(app_id: string): Observable<Review[]> {
    return this.getAllReviews()
    .map(reviews => reviews.filter(review => review.app_id === app_id));
  }

}
