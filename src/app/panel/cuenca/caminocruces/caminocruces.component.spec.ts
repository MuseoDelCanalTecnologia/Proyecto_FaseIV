import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminocrucesComponent } from './caminocruces.component';

describe('CaminocrucesComponent', () => {
  let component: CaminocrucesComponent;
  let fixture: ComponentFixture<CaminocrucesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminocrucesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminocrucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
