import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RioGrandeComponent } from './rio-grande.component';

describe('RioGrandeComponent', () => {
  let component: RioGrandeComponent;
  let fixture: ComponentFixture<RioGrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RioGrandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RioGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
