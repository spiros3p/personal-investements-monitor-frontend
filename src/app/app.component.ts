import { Component } from '@angular/core';
import { AuthApiService } from './services/auth-api/auth-api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    isAuth$ = this._authService.isAuth$;
    constructor(private _authService: AuthApiService) {}
}
