import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavalRodmanComponent } from './naval-rodman.component';

describe('NavalRodmanComponent', () => {
  let component: NavalRodmanComponent;
  let fixture: ComponentFixture<NavalRodmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavalRodmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavalRodmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
