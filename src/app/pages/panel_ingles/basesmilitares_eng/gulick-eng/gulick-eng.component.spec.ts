import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GulickEngComponent } from './gulick-eng.component';

describe('GulickEngComponent', () => {
  let component: GulickEngComponent;
  let fixture: ComponentFixture<GulickEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GulickEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GulickEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
