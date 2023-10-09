import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShermanEngComponent } from './sherman-eng.component';

describe('ShermanEngComponent', () => {
  let component: ShermanEngComponent;
  let fixture: ComponentFixture<ShermanEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShermanEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShermanEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
