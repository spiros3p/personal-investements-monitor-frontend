import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ResourceDataApiService } from 'src/app/services/resource-data-api/resource-data-api.service';

@Component({
    selector: 'app-page-all-charts',
    templateUrl: './page-all-charts.component.html',
    styleUrls: ['./page-all-charts.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageAllChartsComponent implements OnInit {
    resourcesData: any[] | undefined;

    constructor(private resourceApi: ResourceDataApiService) {}

    ngOnInit(): void {
        this.resourceApi.getResourcesData().subscribe((data) => {
            this.resourcesData = [...Object.values(data)];
        });
    }
}
