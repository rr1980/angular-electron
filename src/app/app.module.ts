import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { SharedModule } from './shared.module';
// NG Translate



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// AoT requires an exported function for factories


@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
