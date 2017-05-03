import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';

const APP_ROUTES: Routes = [
	{ path: 'login', component: LoginComponent, canActivate: [AuthService] },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthService] },
	{ path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, {useHash: false})],
    exports: [RouterModule]
})

export class Routing {}