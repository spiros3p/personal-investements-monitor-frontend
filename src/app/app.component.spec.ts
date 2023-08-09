import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('AppComponentSpectator', () => {
    let spectator: Spectator<AppComponent>;
    const createComponent = createComponentFactory({
        component: AppComponent,
        providers: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
