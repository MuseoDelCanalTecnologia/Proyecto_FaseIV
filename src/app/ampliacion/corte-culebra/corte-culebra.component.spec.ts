import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorteCulebraComponent } from './corte-culebra.component';

describe('CorteCulebraComponent', () => {
  let component: CorteCulebraComponent;
  let fixture: ComponentFixture<CorteCulebraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorteCulebraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorteCulebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
