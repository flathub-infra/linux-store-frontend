import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LinuxStoreAngularMaterialModule } from './linux-store-angular-material/linux-store-angular-material.module';

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
    FlexLayoutModule,
    LinuxStoreAngularMaterialModule,
    routing
  ],
  providers: [
    LinuxStoreApiService,
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
