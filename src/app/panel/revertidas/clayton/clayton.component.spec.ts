import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaytonComponent } from './clayton.component';

describe('ClaytonComponent', () => {
  let component: ClaytonComponent;
  let fixture: ComponentFixture<ClaytonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaytonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaytonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
