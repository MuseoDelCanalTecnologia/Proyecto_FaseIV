import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessepsComponent } from './lesseps.component';

describe('LessepsComponent', () => {
  let component: LessepsComponent;
  let fixture: ComponentFixture<LessepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
