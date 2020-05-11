import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { BadgesComponent } from './pages/badges/badges.component';
import { CodeOfConductComponent } from './pages/code-of-conduct/code-of-conduct.component';
import { AppListComponent } from './pages/app-list/app-list.component';
import { AppDetailsComponent } from './pages/app-details/app-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
    path: 'feeds',
    component: FeedsComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'conduct',
    component: CodeOfConductComponent
  },
  {
    path: 'badges',
    component: BadgesComponent
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
    path: 'apps/search/:searchKeyword',
    component: AppListComponent
  },
  {
    path: 'apps/details/:appId',
    component: AppDetailsComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        scrollPositionRestoration: 'enabled',
        // anchorScrolling: 'enabled',
        scrollOffset: [0, 0], // [x, y],
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }

