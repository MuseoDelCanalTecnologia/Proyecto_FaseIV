import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpliacionEngComponent } from './ampliacion-eng.component';

describe('AmpliacionEngComponent', () => {
  let component: AmpliacionEngComponent;
  let fixture: ComponentFixture<AmpliacionEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmpliacionEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmpliacionEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
