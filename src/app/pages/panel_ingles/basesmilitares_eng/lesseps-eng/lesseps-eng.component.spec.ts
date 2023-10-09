import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessepsEngComponent } from './lesseps-eng.component';

describe('LessepsEngComponent', () => {
  let component: LessepsEngComponent;
  let fixture: ComponentFixture<LessepsEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessepsEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessepsEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
