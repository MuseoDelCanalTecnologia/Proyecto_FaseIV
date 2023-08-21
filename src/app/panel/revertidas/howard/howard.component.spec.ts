import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowardComponent } from './howard.component';

describe('HowardComponent', () => {
  let component: HowardComponent;
  let fixture: ComponentFixture<HowardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
