import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from 'AuthGuard';

const routes: Routes = [
    { path: 'home', loadChildren: "./components/home/home.module#HomeModule", canActivate: [AuthGuard]  },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
}) 
export class AppRoutingModule { }

export const routedComponents = [LoginComponent];