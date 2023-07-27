import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestoCorozalComponent } from './puesto-corozal.component';

describe('PuestoCorozalComponent', () => {
  let component: PuestoCorozalComponent;
  let fixture: ComponentFixture<PuestoCorozalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuestoCorozalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuestoCorozalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
