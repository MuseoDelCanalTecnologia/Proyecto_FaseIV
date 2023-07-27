import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionLgatunComponent } from './operacion-lgatun.component';

describe('OperacionLgatunComponent', () => {
  let component: OperacionLgatunComponent;
  let fixture: ComponentFixture<OperacionLgatunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionLgatunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacionLgatunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
