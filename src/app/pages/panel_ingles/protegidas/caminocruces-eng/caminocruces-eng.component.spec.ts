import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminocrucesEngComponent } from './caminocruces-eng.component';

describe('CaminocrucesEngComponent', () => {
  let component: CaminocrucesEngComponent;
  let fixture: ComponentFixture<CaminocrucesEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminocrucesEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminocrucesEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
