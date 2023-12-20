import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasUsuariosComponent } from './rutas-usuarios.component';

describe('RutasUsuariosComponent', () => {
  let component: RutasUsuariosComponent;
  let fixture: ComponentFixture<RutasUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
