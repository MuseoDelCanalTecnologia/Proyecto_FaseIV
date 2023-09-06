import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfundizacionComponent } from './profundizacion.component';

describe('ProfundizacionComponent', () => {
  let component: ProfundizacionComponent;
  let fixture: ComponentFixture<ProfundizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfundizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfundizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
