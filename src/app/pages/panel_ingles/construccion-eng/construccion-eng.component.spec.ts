import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstruccionEngComponent } from './construccion-eng.component';

describe('ConstruccionEngComponent', () => {
  let component: ConstruccionEngComponent;
  let fixture: ComponentFixture<ConstruccionEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstruccionEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstruccionEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
