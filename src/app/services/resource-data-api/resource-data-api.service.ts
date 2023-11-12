import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ResourceDataApiService {
    private url = environment.endpoints.resourceDataServerApi;
    private endpoint = '/resources';
    private get path() {
        return this.url + this.endpoint;
    }

    constructor(private http: HttpClient) {}

    getResourcesData(): Observable<any> {
        return this.http
            .get<any>(this.path)
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
        // window.alert(errorMessage);
        console.error(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }
}
