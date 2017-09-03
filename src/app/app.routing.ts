import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppListComponent } from './pages/app-list/app-list.component';
import { AppDetailsComponent } from './pages/app-details/app-details.component';

const appRoutes: Routes = [
  {
    path: 'apps',
    component: AppListComponent
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
