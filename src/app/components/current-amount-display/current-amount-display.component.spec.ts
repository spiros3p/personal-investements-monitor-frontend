import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAmountDisplayComponent } from './current-amount-display.component';

describe('CurrentAmountDisplayComponent', () => {
    let component: CurrentAmountDisplayComponent;
    let fixture: ComponentFixture<CurrentAmountDisplayComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CurrentAmountDisplayComponent]
        });
        fixture = TestBed.createComponent(CurrentAmountDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
