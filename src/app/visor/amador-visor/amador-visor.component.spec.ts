import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadorVisorComponent } from './amador-visor.component';

describe('AmadorVisorComponent', () => {
  let component: AmadorVisorComponent;
  let fixture: ComponentFixture<AmadorVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmadorVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmadorVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
