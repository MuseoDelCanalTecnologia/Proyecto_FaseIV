import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoligonostiroComponent } from './poligonostiro.component';

describe('PoligonostiroComponent', () => {
  let component: PoligonostiroComponent;
  let fixture: ComponentFixture<PoligonostiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoligonostiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoligonostiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
