import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionesEngComponent } from './conexiones-eng.component';

describe('ConexionesEngComponent', () => {
  let component: ConexionesEngComponent;
  let fixture: ComponentFixture<ConexionesEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexionesEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConexionesEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
