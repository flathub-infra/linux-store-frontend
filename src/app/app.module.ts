import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LinuxStoreAngularMaterialModule } from './linux-store-angular-material/linux-store-angular-material.module';
import { GalleryModule } from '@ngx-gallery/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppListComponent } from './pages/app-list/app-list.component';
import { AppDetailsComponent } from './pages/app-details/app-details.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LinuxStoreApiService } from './linux-store-api.service';
import { GoogleAnalyticsEventsService } from './google-analytics-events.service';
import { SeoService } from './seo.service';
import { AppSidebarComponent } from './shared/app-sidebar/app-sidebar.component';
import { AppDetailsMainComponent } from './shared/app-details-main/app-details-main.component';
import { AppDetailsDescriptionComponent } from './shared/app-details-description/app-details-description.component';
import { AppDetailsExtraInfoComponent } from './shared/app-details-extra-info/app-details-extra-info.component';
import { AppDetailsReviewsComponent } from './shared/app-details-reviews/app-details-reviews.component';
import { HomeComponent } from './pages/home/home.component';
import { AppDetailsInstallInstructionsComponent } from './shared/app-details-install-instructions/app-details-install-instructions.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AboutComponent } from './pages/about/about.component';
import { AppCollectionTeaserComponent } from './shared/app-collection-teaser/app-collection-teaser.component';
import { AppCardListComponent } from './shared/app-card-list/app-card-list.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CodeOfConductComponent } from './pages/code-of-conduct/code-of-conduct.component';
import { PreComponent } from './shared/pre/pre.component';
import { BadgesComponent } from './pages/badges/badges.component';


@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppDetailsComponent,
    FooterComponent,
    AppSidebarComponent,
    AppDetailsMainComponent,
    AppDetailsDescriptionComponent,
    AppDetailsExtraInfoComponent,
    AppDetailsReviewsComponent,
    HomeComponent,
    AppDetailsInstallInstructionsComponent,
    ToolbarComponent,
    AboutComponent,
    AppCollectionTeaserComponent,
    AppCardListComponent,
    TermsComponent,
    PrivacyComponent,
    CodeOfConductComponent,
    PreComponent,
    BadgesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GalleryModule.forRoot(),
    FlexLayoutModule,
    LinuxStoreAngularMaterialModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    LinuxStoreApiService,
    GoogleAnalyticsEventsService,
    SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
