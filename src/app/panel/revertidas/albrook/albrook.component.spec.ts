import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbrookComponent } from './albrook.component';

describe('AlbrookComponent', () => {
  let component: AlbrookComponent;
  let fixture: ComponentFixture<AlbrookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbrookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbrookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
