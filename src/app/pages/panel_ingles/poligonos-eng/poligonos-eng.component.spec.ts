import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoligonosEngComponent } from './poligonos-eng.component';

describe('PoligonosEngComponent', () => {
  let component: PoligonosEngComponent;
  let fixture: ComponentFixture<PoligonosEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoligonosEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoligonosEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
