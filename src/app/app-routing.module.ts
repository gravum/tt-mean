import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sing-up/sign-up.component';
import { RestoreComponent } from './components/restore/restore.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [
            AuthGuard,
        ],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: SignUpComponent,
    },
    {
        path: 'restore',
        component: RestoreComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {
}
