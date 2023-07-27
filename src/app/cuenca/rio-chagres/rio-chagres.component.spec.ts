import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RioChagresComponent } from './rio-chagres.component';

describe('RioChagresComponent', () => {
  let component: RioChagresComponent;
  let fixture: ComponentFixture<RioChagresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RioChagresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RioChagresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
