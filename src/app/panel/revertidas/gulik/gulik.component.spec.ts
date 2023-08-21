import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GulikComponent } from './gulik.component';

describe('GulikComponent', () => {
  let component: GulikComponent;
  let fixture: ComponentFixture<GulikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GulikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GulikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
