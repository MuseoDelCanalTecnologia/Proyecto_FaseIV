import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbrookEngComponent } from './albrook-eng.component';

describe('AlbrookEngComponent', () => {
  let component: AlbrookEngComponent;
  let fixture: ComponentFixture<AlbrookEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbrookEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbrookEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
