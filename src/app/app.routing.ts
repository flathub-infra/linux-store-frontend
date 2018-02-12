import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AppListComponent } from './pages/app-list/app-list.component';
import { AppDetailsComponent } from './pages/app-details/app-details.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'apps',
    component: AppListComponent
  },
  {
    path: 'apps/category/:categoryId',
    component: AppListComponent
  },
  {
    path: 'apps/collection/:collectionId',
    component: AppListComponent
  },
  {
    path: 'apps/details/:id',
    component: AppDetailsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
