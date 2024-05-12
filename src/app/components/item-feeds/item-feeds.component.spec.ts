import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ItemFeedsComponent } from './item-feeds.component';

describe('ItemFeedsComponent', () => {
    let spectator: Spectator<ItemFeedsComponent>;
    const createComponent = createComponentFactory(ItemFeedsComponent);

    it('should create', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });
});
