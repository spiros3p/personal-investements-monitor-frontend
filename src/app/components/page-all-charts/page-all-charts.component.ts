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
        map((e: any[]) => e.filter((d) => !this.checkLastValidDate(d))),
        tap((e) => this._totalEurFromCrypto.set(this.findTotalEurFromCrypto(e)))
    );
    ratesData$: Observable<any> = this.resourceApi.getResourcesData().pipe(
        map((data) => [...Object.values(data)]),
        map((e: any[]) => e.filter((d) => d[0].type == 'Percentage'))
    );

    private findTotalEurFromCrypto(data: any[]) {
        const t = data.reduce((sum, v) => {
            if (this.checkLastValidDate(v)) return sum;
            return sum + v[v.length - 1]['valueInEuro'];
        }, 0);
        return t;
    }

    private checkLastValidDate(val: any) {
        const validTimeframeOfLastValRecord = 86400000; // 24h in ms
        const now = new Date().getTime();
        const valueDate = new Date(val[val.length - 1]['timeStamp']).getTime();
        if (now - valueDate > validTimeframeOfLastValRecord) {
            return true;
        } else {
            return false;
        }
    }
}
