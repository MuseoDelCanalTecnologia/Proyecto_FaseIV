import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertidasEngComponent } from './revertidas-eng.component';

describe('RevertidasEngComponent', () => {
  let component: RevertidasEngComponent;
  let fixture: ComponentFixture<RevertidasEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevertidasEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevertidasEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
