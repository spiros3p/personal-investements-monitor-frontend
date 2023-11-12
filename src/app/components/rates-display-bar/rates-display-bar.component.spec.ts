import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesDisplayBarComponent } from './rates-display-bar.component';

describe('RatesDisplayBarComponent', () => {
  let component: RatesDisplayBarComponent;
  let fixture: ComponentFixture<RatesDisplayBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatesDisplayBarComponent]
    });
    fixture = TestBed.createComponent(RatesDisplayBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
