import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PchagresComponent } from './pchagres.component';

describe('PchagresComponent', () => {
  let component: PchagresComponent;
  let fixture: ComponentFixture<PchagresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PchagresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PchagresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
