import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppsComponent } from './apps/apps.component';
import { AppDetailsComponent } from './app-details/app-details.component';

const appRoutes: Routes = [
  {
    path: 'apps',
    component: AppsComponent
  },
  {
    path: 'apps/details/:id',
    component: AppDetailsComponent
  },
  {
    path: '',
    redirectTo: 'apps',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
