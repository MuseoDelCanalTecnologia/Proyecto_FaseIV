import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoberturaEngComponent } from './cobertura-eng.component';

describe('CoberturaEngComponent', () => {
  let component: CoberturaEngComponent;
  let fixture: ComponentFixture<CoberturaEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoberturaEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoberturaEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
