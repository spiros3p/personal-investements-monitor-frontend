import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { TableFeedsComponent } from './table-feeds.component';

describe('TableFeedsComponent', () => {
    let spectator: Spectator<TableFeedsComponent>;
    const createComponent = createComponentFactory(TableFeedsComponent);

    it('should create', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });
});
