import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuquesEngComponent } from './buques-eng.component';

describe('BuquesEngComponent', () => {
  let component: BuquesEngComponent;
  let fixture: ComponentFixture<BuquesEngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuquesEngComponent]
    });
    fixture = TestBed.createComponent(BuquesEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
