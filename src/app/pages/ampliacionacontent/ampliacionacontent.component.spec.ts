import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpliacionacontentComponent } from './ampliacionacontent.component';

describe('AmpliacionacontentComponent', () => {
  let component: AmpliacionacontentComponent;
  let fixture: ComponentFixture<AmpliacionacontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmpliacionacontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmpliacionacontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
