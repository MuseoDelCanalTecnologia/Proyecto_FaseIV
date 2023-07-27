import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevasEsclusasComponent } from './nevas-esclusas.component';

describe('NevasEsclusasComponent', () => {
  let component: NevasEsclusasComponent;
  let fixture: ComponentFixture<NevasEsclusasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NevasEsclusasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevasEsclusasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
