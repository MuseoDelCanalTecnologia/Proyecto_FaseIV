import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalboaComponent } from './balboa.component';

describe('BalboaComponent', () => {
  let component: BalboaComponent;
  let fixture: ComponentFixture<BalboaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalboaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalboaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
