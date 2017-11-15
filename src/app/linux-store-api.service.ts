import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx'

import { environment } from './../environments/environment';

import { EMPTYAPPS } from './shared/empty-apps';
import { APPS } from './shared/mock-apps';
import { App } from './shared/app.model';
import { Review } from './shared/review.model';
import { REVIEWS } from './shared/mock-reviews';

@Injectable()
export class LinuxStoreApiService {

  private baseUrl = environment.apiUrl;  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  private apps: Promise<App[]>;

  constructor(private http: Http) { }

  getEmptyApps(): Promise<App[]> {
    return Promise.resolve(EMPTYAPPS);
  }

  getMockApps(): Promise<App[]> {
    return Promise.resolve(APPS);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  getApps(): Promise<App[]> {

    if(!this.apps){

      this.apps = this.http
        .get(this.baseUrl, {headers: this.headers})
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
    }

    return this.apps;

  }

  private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Promise.reject(errMsg);
}

  getApp(flatpakAppId: string): Promise<App> {
    return this.getApps()
      .then(apps => apps.find(app => app.flatpakAppId === flatpakAppId));
  }

  getAllReviews(): Promise<Review[]> {
    return Promise.resolve(REVIEWS);
  }

  getReviews(app_id: string): Promise<Review[]> {
    return this.getAllReviews()
      .then(reviews => reviews.filter(review => review.app_id === app_id));
  }


}
