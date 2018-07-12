import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RestoreComponent } from './components/restore/restore.component';
import { SignUpComponent } from './components/sing-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        NavigationComponent,
        RestoreComponent,
        SignUpComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        RouterModule,
    ],
    bootstrap: [
        AppComponent,
    ],
    providers: [
        AuthGuard,
        AuthService,
    ]
})
export class AppModule {
}
