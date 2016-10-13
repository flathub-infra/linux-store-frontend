import { Injectable } from '@angular/core';

import { App } from './shared/app.model';
import { APPS } from './shared/mock-apps';

@Injectable()
export class FlathubApiService {

  constructor() { }

  private getAppsFast(): Promise<App[]> {
    return Promise.resolve(APPS);
  }

  getApps(): Promise<App[]> {
    return new Promise<App[]>(resolve =>
      setTimeout(resolve, 400)) // delay 0,4 seconds
      .then(() => this.getAppsFast());
  }

  getApp(id: string): Promise<App> {
    return this.getApps()
      .then(apps => apps.find(app => app.id === id));
  }

}
