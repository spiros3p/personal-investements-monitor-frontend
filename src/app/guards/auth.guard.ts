import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    constructor(
        private authService: AuthApiService,
        private router: Router // private uiService: UiService
    ) {}

    /**
     * It is called in the app.routing.module.ts file
     * It calls the authservice.isAuthenticated and gets a boolean answer whether the user (session) is authenticated with the server or not.
     * @returns An observable of type boolean to let Angular Router know whether to authorize access to the particular component(view) or not
     */
    canActivate() {
        return new Observable<boolean>((x) => {
            this.authService.isAuthenticated().subscribe({
                next: (msg) => {
                    x.next(msg);
                    if (msg) return;
                    localStorage.clear();
                    this.router.navigate(['/login']);
                },
            });
        });
    }
}
