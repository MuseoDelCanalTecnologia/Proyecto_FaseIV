import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadorEngComponent } from './amador-eng.component';

describe('AmadorEngComponent', () => {
  let component: AmadorEngComponent;
  let fixture: ComponentFixture<AmadorEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmadorEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmadorEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
