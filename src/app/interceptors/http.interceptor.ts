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
    m: any;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.m) {
            req = req.clone({
                withCredentials: true,
                headers: req.headers.set('Cookie', this.m),
            });
        } else {
            req = req.clone({
                withCredentials: true,
            });
        }

        return next.handle(req).pipe(
            tap((e) => {
                if ((e as any)?.body?.cook) {
                    this.m = (e as any).body.cook;
                    console.log(this.m);
                }
            })
        );
    }
}
