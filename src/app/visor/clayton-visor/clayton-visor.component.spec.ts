import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaytonVisorComponent } from './clayton-visor.component';

describe('ClaytonVisorComponent', () => {
  let component: ClaytonVisorComponent;
  let fixture: ComponentFixture<ClaytonVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaytonVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaytonVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
