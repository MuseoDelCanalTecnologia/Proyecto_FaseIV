import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GulickVisorComponent } from './gulick-visor.component';

describe('GulickVisorComponent', () => {
  let component: GulickVisorComponent;
  let fixture: ComponentFixture<GulickVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GulickVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GulickVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
