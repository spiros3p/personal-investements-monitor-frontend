import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResourceDataApiService } from 'src/app/services/resource-data-api/resource-data-api.service';
import {
    optionsForEuroChanges,
    optionsForValueChanges,
} from '../periods-rate-change/options';
@Component({
    selector: 'app-page-all-charts',
    templateUrl: './page-all-charts.component.html',
    styleUrls: ['./page-all-charts.component.scss'],
})
export class PageAllChartsComponent {
    optsForEur = optionsForEuroChanges as any;
    optsForVal = optionsForValueChanges as any;
    constructor(private resourceApi: ResourceDataApiService) {}
    resourcesData$: Observable<any> = this.resourceApi.getResourcesData().pipe(
        map((data) => [...Object.values(data)]),
        map((e: any[]) => e.filter((d) => d[0].type == 'Amount'))
    );
    ratesData$: Observable<any> = this.resourceApi.getResourcesData().pipe(
        map((data) => [...Object.values(data)]),
        map((e: any[]) => e.filter((d) => d[0].type == 'Percentage'))
    );
}
