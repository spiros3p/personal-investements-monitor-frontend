import { Component, Input, OnInit, signal } from '@angular/core';
import { DataMapperService } from 'src/app/services/data-mapper/data-mapper.service';

@Component({
    selector: 'app-periods-rate-change',
    templateUrl: './periods-rate-change.component.html',
    styleUrls: ['./periods-rate-change.component.scss'],
})
export class PeriodsRateChangeComponent implements OnInit {
    @Input() data: any = [];
    @Input() options: any = {};

    itemList = signal<any[]>([]);

    constructor(private dataMapper: DataMapperService) {}

    ngOnInit(): void {
        this.determinValues();
    }

    private determinValues() {
        if (this.data[0].type == 'Percentage') return;
        const latestDate = new Date(this.data[this.data.length - 1].timeStamp);
        const desiredDatess = this.dataMapper.findDesiredDays(
            latestDate,
            this.options.daysAgo
        );
        const res = this.dataMapper.findValuesFromDaysAgo(
            this.data,
            desiredDatess,
            this.options.daysAgo,
            this.options.key
        );
        this.itemList.set([...res]);
    }

    isPositive(element: number | string): boolean {
        return Number(element) > 0;
    }
    isNegative(element: number | string): boolean {
        return Number(element) < 0;
    }
    isNil(element: number | string): boolean {
        return Number(element) == 0;
    }
    decideBadgeBG(val: any) {
        if (this.isNegative(val)) {
            return 'bg-danger';
        } else if (this.isPositive(val)) {
            return 'bg-success';
        } else {
            return 'bg-secondary';
        }
    }
}
