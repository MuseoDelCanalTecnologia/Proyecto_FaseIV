import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmperadorComponent } from './emperador.component';

describe('EmperadorComponent', () => {
  let component: EmperadorComponent;
  let fixture: ComponentFixture<EmperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmperadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
