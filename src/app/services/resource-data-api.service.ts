import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ResourceDataApiService {
    url = 'http://pim-api.spiros.tpsflavor.site/resources';
    constructor(private http: HttpClient) {}

    getResourcesData(): Observable<any> {
        return this.http
            .get<any>(this.url)
            .pipe(retry(1), catchError(this.handleError));
    }
    
    // Error handling
    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }
}
