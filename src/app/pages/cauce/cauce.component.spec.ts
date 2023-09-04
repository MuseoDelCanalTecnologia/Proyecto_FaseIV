import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauceComponent } from './cauce.component';

describe('CauceComponent', () => {
  let component: CauceComponent;
  let fixture: ComponentFixture<CauceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CauceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
