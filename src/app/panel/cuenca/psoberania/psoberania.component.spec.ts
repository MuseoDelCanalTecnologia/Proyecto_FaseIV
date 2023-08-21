import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsoberaniaComponent } from './psoberania.component';

describe('PsoberaniaComponent', () => {
  let component: PsoberaniaComponent;
  let fixture: ComponentFixture<PsoberaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsoberaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsoberaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
