import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEurAmountsBarComponent } from './total-eur-amounts-bar.component';

describe('TotalEurAmountsBarComponent', () => {
  let component: TotalEurAmountsBarComponent;
  let fixture: ComponentFixture<TotalEurAmountsBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalEurAmountsBarComponent]
    });
    fixture = TestBed.createComponent(TotalEurAmountsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
