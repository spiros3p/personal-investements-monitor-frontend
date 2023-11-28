import { Component, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
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
    _ratesData = signal<any>([]);
    _totalEurFromCrypto = signal<number>(0);
    constructor(private resourceApi: ResourceDataApiService) {}
    resourcesData$: Observable<any> = this.resourceApi.getResourcesData().pipe(
        map((data) => [...Object.values(data)]),
        tap((e: any[]) =>
            this._ratesData.set(e.filter((d) => d[0].type == 'Percentage'))
        ),
        map((e: any[]) => e.filter((d) => d[0].type == 'Amount')),
        tap((e) => this._totalEurFromCrypto.set(this.findTotalEurFromCrypto(e)))
    );
    ratesData$: Observable<any> = this.resourceApi.getResourcesData().pipe(
        map((data) => [...Object.values(data)]),
        map((e: any[]) => e.filter((d) => d[0].type == 'Percentage'))
    );

    private findTotalEurFromCrypto(data: any[]) {
        let total = 0
        data.map(e => total += e[e.length-1]['valueInEuro'])
        return total
    }
}
