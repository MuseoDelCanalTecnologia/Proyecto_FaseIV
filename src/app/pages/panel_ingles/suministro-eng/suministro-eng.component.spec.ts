import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroEngComponent } from './suministro-eng.component';

describe('SuministroEngComponent', () => {
  let component: SuministroEngComponent;
  let fixture: ComponentFixture<SuministroEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuministroEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuministroEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
