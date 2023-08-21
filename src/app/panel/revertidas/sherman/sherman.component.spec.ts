import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShermanComponent } from './sherman.component';

describe('ShermanComponent', () => {
  let component: ShermanComponent;
  let fixture: ComponentFixture<ShermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShermanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
