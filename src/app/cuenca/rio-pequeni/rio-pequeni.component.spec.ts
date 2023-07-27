import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RioPequeniComponent } from './rio-pequeni.component';

describe('RioPequeniComponent', () => {
  let component: RioPequeniComponent;
  let fixture: ComponentFixture<RioPequeniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RioPequeniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RioPequeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
