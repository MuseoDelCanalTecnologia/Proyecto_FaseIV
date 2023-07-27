import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseHowardComponent } from './base-howard.component';

describe('BaseHowardComponent', () => {
  let component: BaseHowardComponent;
  let fixture: ComponentFixture<BaseHowardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseHowardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseHowardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
