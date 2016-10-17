import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { MdlModule } from 'angular2-mdl';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { FlathubApiService } from './flathub-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AppsComponent,
    AppDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    routing
  ],
  providers: [
    FlathubApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
