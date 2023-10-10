import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaytonEngComponent } from './clayton-eng.component';

describe('ClaytonEngComponent', () => {
  let component: ClaytonEngComponent;
  let fixture: ComponentFixture<ClaytonEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaytonEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaytonEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
