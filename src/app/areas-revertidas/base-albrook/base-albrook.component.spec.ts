import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAlbrookComponent } from './base-albrook.component';

describe('BaseAlbrookComponent', () => {
  let component: BaseAlbrookComponent;
  let fixture: ComponentFixture<BaseAlbrookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseAlbrookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseAlbrookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
