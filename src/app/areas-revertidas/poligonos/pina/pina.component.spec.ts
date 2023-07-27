import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinaComponent } from './pina.component';

describe('PinaComponent', () => {
  let component: PinaComponent;
  let fixture: ComponentFixture<PinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
