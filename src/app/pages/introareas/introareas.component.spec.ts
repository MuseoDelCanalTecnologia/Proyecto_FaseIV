import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroareasComponent } from './introareas.component';

describe('IntroareasComponent', () => {
  let component: IntroareasComponent;
  let fixture: ComponentFixture<IntroareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
