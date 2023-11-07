import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ResourceDataApiService } from './resource-data-api.service';

describe('ResourceDataApiService', () => {
    let spectator: SpectatorService<ResourceDataApiService>;
    const createService = createServiceFactory(ResourceDataApiService);

    beforeEach(() => (spectator = createService()));

    it('should...', () => {
        expect(spectator.service).toBeTruthy();
    });
});
