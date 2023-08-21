import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodmanComponent } from './rodman.component';

describe('RodmanComponent', () => {
  let component: RodmanComponent;
  let fixture: ComponentFixture<RodmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
