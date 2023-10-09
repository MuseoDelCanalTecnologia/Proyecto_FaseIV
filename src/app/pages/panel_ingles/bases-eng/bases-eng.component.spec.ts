import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesEngComponent } from './bases-eng.component';

describe('BasesEngComponent', () => {
  let component: BasesEngComponent;
  let fixture: ComponentFixture<BasesEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasesEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasesEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
