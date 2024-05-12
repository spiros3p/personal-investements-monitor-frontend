import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PageFeedsComponent } from './page-feeds.component';

describe('PageFeedsComponent', () => {
    let spectator: Spectator<PageFeedsComponent>;
    const createComponent = createComponentFactory(PageFeedsComponent);

    it('should create', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });
});
