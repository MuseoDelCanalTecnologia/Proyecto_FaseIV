import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RioTrinidadComponent } from './rio-trinidad.component';

describe('RioTrinidadComponent', () => {
  let component: RioTrinidadComponent;
  let fixture: ComponentFixture<RioTrinidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RioTrinidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RioTrinidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
