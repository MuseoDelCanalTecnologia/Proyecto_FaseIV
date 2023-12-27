import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasEngComponent } from './rutas-eng.component';

describe('RutasEngComponent', () => {
  let component: RutasEngComponent;
  let fixture: ComponentFixture<RutasEngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutasEngComponent]
    });
    fixture = TestBed.createComponent(RutasEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
