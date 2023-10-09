import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroareasEngComponent } from './introareas-eng.component';

describe('IntroareasEngComponent', () => {
  let component: IntroareasEngComponent;
  let fixture: ComponentFixture<IntroareasEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroareasEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroareasEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
