import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { FeedDataApiService } from './feed-data-api.service';

describe('FeedDataApiService', () => {
    let spectator: SpectatorService<FeedDataApiService>;
    const createService = createServiceFactory(FeedDataApiService);

    beforeEach(() => (spectator = createService()));

    it('should...', () => {
        expect(spectator.service).toBeTruthy();
    });
});
