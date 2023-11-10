import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';

import { Observable, tap } from 'rxjs';

/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    token: any;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${this.token}`),
        });

        return next.handle(req).pipe(
            tap((res: any) => {
                if (res?.body?.token) {
                    this.token = res?.body?.token;
                }
            })
        );
    }
}
