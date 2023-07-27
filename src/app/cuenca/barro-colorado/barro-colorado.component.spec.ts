import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarroColoradoComponent } from './barro-colorado.component';

describe('BarroColoradoComponent', () => {
  let component: BarroColoradoComponent;
  let fixture: ComponentFixture<BarroColoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarroColoradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarroColoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
