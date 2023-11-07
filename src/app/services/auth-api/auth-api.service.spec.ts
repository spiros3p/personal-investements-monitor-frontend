import { AuthApiService } from './auth-api.service';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

describe('AuthApiService', () => {
    let spectator: SpectatorService<AuthApiService>;
    const createService = createServiceFactory(AuthApiService);

    beforeEach(() => (spectator = createService()));

    it('should...', () => {
        expect(spectator.service).toBeTruthy();
    });
});
