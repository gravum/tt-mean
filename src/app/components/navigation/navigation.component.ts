import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent {

    constructor(
        private authService: AuthService,
    ) { }

    public get isLoggedIn(): boolean {
        return this.authService.isLoggedIn;
    }

    public logout(): void {
        this.authService.logout();
    }
}
