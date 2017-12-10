import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LinuxStoreAngularMaterialModule } from './linux-store-angular-material/linux-store-angular-material.module';
import { GalleryModule, GalleryConfig } from 'ng-gallery';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AppListComponent } from './pages/app-list/app-list.component';
import { AppDetailsComponent } from './pages/app-details/app-details.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LinuxStoreApiService } from './linux-store-api.service';
import { AppSidebarComponent } from './shared/app-sidebar/app-sidebar.component';
import { AppCardListVertComponent } from './shared/app-card-list-vert/app-card-list-vert.component';
import { AppDetailsMainComponent } from './shared/app-details-main/app-details-main.component';
import { AppDetailsDescriptionComponent } from './shared/app-details-description/app-details-description.component';
import { AppDetailsExtraInfoComponent } from './shared/app-details-extra-info/app-details-extra-info.component';
import { AppDetailsReviewsComponent } from './shared/app-details-reviews/app-details-reviews.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppDetailsInstallInstructionsComponent } from './shared/app-details-install-instructions/app-details-install-instructions.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

export const galleryConfig: GalleryConfig = {
  "gestures": true,
  "style": {
    "width": "900px",
    "height": "460px",
    //"background": "#121519"
    "background": "#BCBCB6"
  },
  "navigation": {},
  "loader": {
    "icon": "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='135' height='140' fill='%23fff'%3E%3Crect width='15' height='120' y='10' rx='6'%3E%3Canimate attributeName='height' begin='0.5s' dur='1s' values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear' repeatCount='indefinite'/%3E%3Canimate attributeName='y' begin='0.5s' dur='1s' values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect width='15' height='120' x='30' y='10' rx='6'%3E%3Canimate attributeName='height' begin='0.25s' dur='1s' values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear' repeatCount='indefinite'/%3E%3Canimate attributeName='y' begin='0.25s' dur='1s' values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect width='15' height='140' x='60' rx='6'%3E%3Canimate attributeName='height' begin='0s' dur='1s' values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear' repeatCount='indefinite'/%3E%3Canimate attributeName='y' begin='0s' dur='1s' values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect width='15' height='120' x='90' y='10' rx='6'%3E%3Canimate attributeName='height' begin='0.25s' dur='1s' values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear' repeatCount='indefinite'/%3E%3Canimate attributeName='y' begin='0.25s' dur='1s' values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect width='15' height='120' x='120' y='10' rx='6'%3E%3Canimate attributeName='height' begin='0.5s' dur='1s' values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear' repeatCount='indefinite'/%3E%3Canimate attributeName='y' begin='0.5s' dur='1s' values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E"
  },
  "description": null,
  "player": {
    "autoplay": false,
    "interval": 3000,
    "progress": true,
    "position": "bottom"
  },
  "thumbnails": {
    "width": 90,
    "height": 70,
    "position": "bottom"
  },
  "lightbox": {
    "backdropClass": "g-backdrop",
    "panelClass": "g-overlay",
    "hasBackdrop": true
  },
  "imageSize": "cover"
}

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppDetailsComponent,
    FooterComponent,
    AppSidebarComponent,
    AppCardListVertComponent,
    AppDetailsMainComponent,
    AppDetailsDescriptionComponent,
    AppDetailsExtraInfoComponent,
    AppDetailsReviewsComponent,
    HomeComponent,
    NavbarComponent,
    AppDetailsInstallInstructionsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GalleryModule.forRoot(galleryConfig),
    FlexLayoutModule,
    LinuxStoreAngularMaterialModule,
    routing
  ],
  providers: [
    LinuxStoreApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
