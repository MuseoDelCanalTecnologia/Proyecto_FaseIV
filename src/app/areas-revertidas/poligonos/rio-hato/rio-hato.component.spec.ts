import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RioHatoComponent } from './rio-hato.component';

describe('RioHatoComponent', () => {
  let component: RioHatoComponent;
  let fixture: ComponentFixture<RioHatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RioHatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RioHatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
