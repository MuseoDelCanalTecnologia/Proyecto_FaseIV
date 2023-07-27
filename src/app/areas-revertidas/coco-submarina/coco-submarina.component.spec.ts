import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoSubmarinaComponent } from './coco-submarina.component';

describe('CocoSubmarinaComponent', () => {
  let component: CocoSubmarinaComponent;
  let fixture: ComponentFixture<CocoSubmarinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoSubmarinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocoSubmarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
