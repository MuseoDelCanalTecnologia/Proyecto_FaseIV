import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandolphEngComponent } from './randolph-eng.component';

describe('RandolphEngComponent', () => {
  let component: RandolphEngComponent;
  let fixture: ComponentFixture<RandolphEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandolphEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandolphEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
