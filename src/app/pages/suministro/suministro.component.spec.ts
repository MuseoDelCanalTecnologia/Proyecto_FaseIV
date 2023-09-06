import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroComponent } from './suministro.component';

describe('SuministroComponent', () => {
  let component: SuministroComponent;
  let fixture: ComponentFixture<SuministroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuministroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuministroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
