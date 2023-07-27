import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarfamComponent } from './farfam.component';

describe('FarfamComponent', () => {
  let component: FarfamComponent;
  let fixture: ComponentFixture<FarfamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarfamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarfamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
