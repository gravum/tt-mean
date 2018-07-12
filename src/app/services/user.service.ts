import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    private readonly path: string;

    constructor(
        private http: HttpClient,
    ) {
        this.path = `${ environment.apiUrl }/user`;
    }

    public get(userId: number): Observable<any> {
        return this.http.get(`${ this.path }/${userId}`);
    }
}
