import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoPacificoComponent } from './acceso-pacifico.component';

describe('AccesoPacificoComponent', () => {
  let component: AccesoPacificoComponent;
  let fixture: ComponentFixture<AccesoPacificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoPacificoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
