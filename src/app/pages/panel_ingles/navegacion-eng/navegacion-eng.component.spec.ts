import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionEngComponent } from './navegacion-eng.component';

describe('NavegacionEngComponent', () => {
  let component: NavegacionEngComponent;
  let fixture: ComponentFixture<NavegacionEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacionEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
