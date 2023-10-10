import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoampliacionEngComponent } from './contenidoampliacion-eng.component';

describe('ContenidoampliacionEngComponent', () => {
  let component: ContenidoampliacionEngComponent;
  let fixture: ComponentFixture<ContenidoampliacionEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoampliacionEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoampliacionEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
