import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalConexionesComponent } from './canal-conexiones.component';

describe('CanalConexionesComponent', () => {
  let component: CanalConexionesComponent;
  let fixture: ComponentFixture<CanalConexionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanalConexionesComponent]
    });
    fixture = TestBed.createComponent(CanalConexionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
