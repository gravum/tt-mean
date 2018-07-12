import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor(
        private router: Router,
    ) { }

    public get isLoggedIn(): boolean {
        return true;
    }

    public login(): Observable<boolean> {
        return Observable.of(true);
    }

    public logout(): void {
        this.router.navigate([ '/login' ]);
    }
}
