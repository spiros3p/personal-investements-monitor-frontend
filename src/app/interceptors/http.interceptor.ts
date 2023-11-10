import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem(environment.localStorageKey.token);
        req = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`),
        });
        return next.handle(req);
    }
}
