import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PageSingleChartComponent } from './page-single-chart.component';

describe('PageSingleChartComponent', () => {
    let spectator: Spectator<PageSingleChartComponent>;
    const createComponent = createComponentFactory(PageSingleChartComponent);

    it('should create', () => {
        spectator = createComponent();

        expect(spectator.component).toBeTruthy();
    });
});
