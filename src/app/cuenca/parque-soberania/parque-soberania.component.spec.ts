import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueSoberaniaComponent } from './parque-soberania.component';

describe('ParqueSoberaniaComponent', () => {
  let component: ParqueSoberaniaComponent;
  let fixture: ComponentFixture<ParqueSoberaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParqueSoberaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParqueSoberaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
