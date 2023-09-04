import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuenca3Component } from './cuenca3.component';

describe('Cuenca3Component', () => {
  let component: Cuenca3Component;
  let fixture: ComponentFixture<Cuenca3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuenca3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuenca3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
