import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalRutasComponent } from './canal-rutas.component';

describe('CanalRutasComponent', () => {
  let component: CanalRutasComponent;
  let fixture: ComponentFixture<CanalRutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanalRutasComponent]
    });
    fixture = TestBed.createComponent(CanalRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
