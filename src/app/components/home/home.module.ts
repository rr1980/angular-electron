import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { SharedModule } from '../../shared.module';

import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { WebviewDirective } from 'app/directives/webview.directive';


@NgModule({
  declarations: [
    routedComponents,
    WebviewDirective,
],
  imports: [
    AngularFontAwesomeModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [],
})
export class HomeModule { }
