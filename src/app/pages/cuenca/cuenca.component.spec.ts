import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuencaComponent } from './cuenca.component';

describe('CuencaComponent', () => {
  let component: CuencaComponent;
  let fixture: ComponentFixture<CuencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuencaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
