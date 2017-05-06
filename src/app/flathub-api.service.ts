import { Injectable } from '@angular/core';

import { App } from './shared/app.model';
import { APPS } from './shared/mock-apps';
import { Review } from './shared/review.model';
import { REVIEWS } from './shared/mock-reviews';

@Injectable()
export class FlathubApiService {

  constructor() { }

  private getAppsFast(): Promise<App[]> {
    return Promise.resolve(APPS);
  }

  getApps(): Promise<App[]> {
    /*return new Promise<App[]>(resolve =>
      setTimeout(resolve, 400)) // delay 0,4 seconds
      .then(() => this.getAppsFast());*/
      return Promise.resolve(APPS);
  }

  getApp(id: string): Promise<App> {
    return this.getApps()
      .then(apps => apps.find(app => app.id === id));
  }

  getAllReviews(): Promise<Review[]> {
    return Promise.resolve(REVIEWS);
  }

  getReviews(app_id: string): Promise<Review[]> {
    return this.getAllReviews()
      .then(reviews => reviews.filter(review => review.app_id === app_id));
  }


}
