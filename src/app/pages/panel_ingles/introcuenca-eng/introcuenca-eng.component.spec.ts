import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrocuencaEngComponent } from './introcuenca-eng.component';

describe('IntrocuencaEngComponent', () => {
  let component: IntrocuencaEngComponent;
  let fixture: ComponentFixture<IntrocuencaEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrocuencaEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrocuencaEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
