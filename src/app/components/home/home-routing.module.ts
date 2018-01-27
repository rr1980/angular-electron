import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../home/home.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from "AuthGuard";

const routes: Routes = [
  { 
    path: "", component: HomeComponent ,canActivate: [AuthGuard] ,
    children:[
      {
        path: "account", component: AccountComponent , canActivate: [AuthGuard] 
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
