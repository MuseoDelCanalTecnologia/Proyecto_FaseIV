import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowardEngComponent } from './howard-eng.component';

describe('HowardEngComponent', () => {
  let component: HowardEngComponent;
  let fixture: ComponentFixture<HowardEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowardEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowardEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
