import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavisEngComponent } from './davis-eng.component';

describe('DavisEngComponent', () => {
  let component: DavisEngComponent;
  let fixture: ComponentFixture<DavisEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavisEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavisEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
