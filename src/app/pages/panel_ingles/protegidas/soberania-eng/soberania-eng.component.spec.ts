import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoberaniaEngComponent } from './soberania-eng.component';

describe('SoberaniaEngComponent', () => {
  let component: SoberaniaEngComponent;
  let fixture: ComponentFixture<SoberaniaEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoberaniaEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoberaniaEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
