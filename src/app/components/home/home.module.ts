import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { HomeRoutingModule, routedComponents } from './home-routing.module';



import { WebviewDirective } from 'app/directives/webview.directive';



@NgModule({
  declarations: [
    routedComponents,
    WebviewDirective
  ],
  imports: [
    AngularFontAwesomeModule,
    HomeRoutingModule,
  ],
  providers: [],
})
export class HomeModule { }
