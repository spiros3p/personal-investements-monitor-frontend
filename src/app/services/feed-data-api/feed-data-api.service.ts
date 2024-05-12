import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { feeds } from './feed-data-api.token';
import { FeedData } from './feed-data.model';
// import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class FeedDataApiService {
    private readonly url = environment.endpoints.resourceDataServerApi;
    private readonly endpoint = '/feeds/';
    private get path() {
        return this.url + this.endpoint;
    }
    public readonly listOfFeeds = feeds;

    constructor(
        private http: HttpClient
        //  private toaster: MessageService
    ) {}

    getFeed(resource: string): Observable<number | void> {
        return this.http.get<number | void>(this.path + resource).pipe(
            catchError(this.handleError),
            filter((d) => d !== undefined && d !== null)
        );
    }

    updateFeed(d: FeedData) {
        return this.http
            .patch<number | void>(this.path + d.name, { value: d.value })
            .pipe(
                catchError(this.handleError)
                // filter((d) => d !== undefined && d !== null)
            );
    }

    private handleError(e: HttpErrorResponse) {
        // this.toaster.add({
        //     severity: 'error',
        //     summary: 'Error',
        //     detail: JSON.stringify(e),
        // });
        return of(console.log(e));
    }
}
