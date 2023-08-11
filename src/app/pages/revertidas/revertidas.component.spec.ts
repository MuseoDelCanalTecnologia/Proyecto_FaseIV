import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertidasComponent } from './revertidas.component';

describe('RevertidasComponent', () => {
  let component: RevertidasComponent;
  let fixture: ComponentFixture<RevertidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevertidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevertidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
