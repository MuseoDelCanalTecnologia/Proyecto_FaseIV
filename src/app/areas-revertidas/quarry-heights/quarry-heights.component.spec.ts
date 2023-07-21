import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarryHeightsComponent } from './quarry-heights.component';

describe('QuarryHeightsComponent', () => {
  let component: QuarryHeightsComponent;
  let fixture: ComponentFixture<QuarryHeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarryHeightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuarryHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
