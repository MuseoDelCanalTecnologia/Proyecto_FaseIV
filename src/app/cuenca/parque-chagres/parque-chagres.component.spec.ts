import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueChagresComponent } from './parque-chagres.component';

describe('ParqueChagresComponent', () => {
  let component: ParqueChagresComponent;
  let fixture: ComponentFixture<ParqueChagresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParqueChagresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParqueChagresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
