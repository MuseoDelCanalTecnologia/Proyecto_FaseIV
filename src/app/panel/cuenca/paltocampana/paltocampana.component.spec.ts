import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaltocampanaComponent } from './paltocampana.component';

describe('PaltocampanaComponent', () => {
  let component: PaltocampanaComponent;
  let fixture: ComponentFixture<PaltocampanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaltocampanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaltocampanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
