import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../home/home.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { 
    path: "", component: HomeComponent ,
    children:[
      {
        path: "account", component: AccountComponent 
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class HomeRoutingModule {}

export const routedComponents = [NavbarComponent, HomeComponent, AccountComponent];
