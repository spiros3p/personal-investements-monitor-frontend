import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {
    let spectator: Spectator<MainMenuComponent>;
    const createComponent = createComponentFactory(MainMenuComponent);

    it('should create', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });
});
