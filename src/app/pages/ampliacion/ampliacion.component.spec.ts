import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpliacionComponent } from './ampliacion.component';

describe('AmpliacionComponent', () => {
  let component: AmpliacionComponent;
  let fixture: ComponentFixture<AmpliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmpliacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmpliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
