import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalboaOesteComponent } from './balboa-oeste.component';

describe('BalboaOesteComponent', () => {
  let component: BalboaOesteComponent;
  let fixture: ComponentFixture<BalboaOesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalboaOesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalboaOesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
