import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandolphComponent } from './randolph.component';

describe('RandolphComponent', () => {
  let component: RandolphComponent;
  let fixture: ComponentFixture<RandolphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandolphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandolphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
