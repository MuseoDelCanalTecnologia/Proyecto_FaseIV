import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltosCampanaComponent } from './altos-campana.component';

describe('AltosCampanaComponent', () => {
  let component: AltosCampanaComponent;
  let fixture: ComponentFixture<AltosCampanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltosCampanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltosCampanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
