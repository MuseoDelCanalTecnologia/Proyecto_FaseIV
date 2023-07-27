import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacificoAtlanticoComponent } from './pacifico-atlantico.component';

describe('PacificoAtlanticoComponent', () => {
  let component: PacificoAtlanticoComponent;
  let fixture: ComponentFixture<PacificoAtlanticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacificoAtlanticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacificoAtlanticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
