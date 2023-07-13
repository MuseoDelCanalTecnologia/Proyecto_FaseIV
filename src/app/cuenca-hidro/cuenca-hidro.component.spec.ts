import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuencaHidroComponent } from './cuenca-hidro.component';

describe('CuencaHidroComponent', () => {
  let component: CuencaHidroComponent;
  let fixture: ComponentFixture<CuencaHidroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuencaHidroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuencaHidroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
