import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapazoomComponent } from './mapazoom.component';

describe('MapazoomComponent', () => {
  let component: MapazoomComponent;
  let fixture: ComponentFixture<MapazoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapazoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapazoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
