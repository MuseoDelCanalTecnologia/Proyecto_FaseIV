import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauceEngComponent } from './cauce-eng.component';

describe('CauceEngComponent', () => {
  let component: CauceEngComponent;
  let fixture: ComponentFixture<CauceEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauceEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CauceEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
