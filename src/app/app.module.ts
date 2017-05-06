import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { MdlModule } from '@angular-mdl/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { FooterComponent } from './footer/footer.component';
import { FlathubApiService } from './flathub-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppDetailsComponent,
    FooterComponent
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
