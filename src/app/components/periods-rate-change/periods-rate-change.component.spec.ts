import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodsRateChangeComponent } from './periods-rate-change.component';

describe('PeriodsRateChangeComponent', () => {
  let component: PeriodsRateChangeComponent;
  let fixture: ComponentFixture<PeriodsRateChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodsRateChangeComponent]
    });
    fixture = TestBed.createComponent(PeriodsRateChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
