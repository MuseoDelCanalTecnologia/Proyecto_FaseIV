import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfundizacionEngComponent } from './profundizacion-eng.component';

describe('ProfundizacionEngComponent', () => {
  let component: ProfundizacionEngComponent;
  let fixture: ComponentFixture<ProfundizacionEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfundizacionEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfundizacionEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
