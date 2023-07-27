import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminoCrucesComponent } from './camino-cruces.component';

describe('CaminoCrucesComponent', () => {
  let component: CaminoCrucesComponent;
  let fixture: ComponentFixture<CaminoCrucesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminoCrucesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminoCrucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
