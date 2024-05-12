import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, catchError, of, map } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthApiService {
    private readonly basePath = environment.endpoints.resourceDataServerApi + '/auth';
    private readonly httpOptions: { headers: HttpHeaders } = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    isAuth$ = new BehaviorSubject(false);

    constructor(private http: HttpClient) {}

    isAuthenticated(): Observable<any> {
        return this.http
            .post<any>(`${this.basePath}/isAuthenticated`, this.httpOptions)
            .pipe(
                map((d) => !!d),
                catchError(() => of(false)),
                tap((d) => this.isAuth$.next(d))
            );
    }

    login(username: string | any, password: string | any): Observable<any> {
        return this.http
            .post<any>(
                `${this.basePath}/login`,
                { username, password },
                this.httpOptions
            )
            .pipe(
                tap((res) => {
                    localStorage.setItem(environment.localStorageKey.token, res?.token);
                })
            );
    }
}
