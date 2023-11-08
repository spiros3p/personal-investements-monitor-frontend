import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService],
})
export class LoginComponent {
    username = new FormControl('');
    password = new FormControl('');

    constructor(
        private _authService: AuthApiService,
        private _toasterService: MessageService,
        private _router: Router
    ) {}

    login() {
        const username = this.username.value;
        const password = this.password.value;

        this._authService.login(username, password).subscribe({
            next: (response: HttpResponse<any>) => {
                this._toasterService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Successful log in!',
                });
                // localStorage.setItem('currentUser', JSON.stringify(response.user));
                setTimeout(() => {
                    this._router.navigate(['/']);
                }, 700);
            },
            error: (error: HttpErrorResponse) => {
                if (typeof error.error.error === 'undefined') {
                    this._toasterService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: `ERROR: ${error.error.message}`,
                    });
                    console.error(error.error);
                } else {
                    this._toasterService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: `ERROR: ${error.error.error.message}`,
                    });
                    console.error(`ERROR: ${error.error.error.message}`);
                }
            },
        });
    }
}
