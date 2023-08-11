import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PageAllChartsComponent } from './page-all-charts.component';

describe('PageAllChartsComponent', () => {
    let spectator: Spectator<PageAllChartsComponent>;
    const createComponent = createComponentFactory(PageAllChartsComponent);

    it('should create', () => {
        spectator = createComponent();

        expect(spectator.component).toBeTruthy();
    });
});
