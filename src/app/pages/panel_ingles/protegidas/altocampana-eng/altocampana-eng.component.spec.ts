import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltocampanaEngComponent } from './altocampana-eng.component';

describe('AltocampanaEngComponent', () => {
  let component: AltocampanaEngComponent;
  let fixture: ComponentFixture<AltocampanaEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltocampanaEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltocampanaEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
