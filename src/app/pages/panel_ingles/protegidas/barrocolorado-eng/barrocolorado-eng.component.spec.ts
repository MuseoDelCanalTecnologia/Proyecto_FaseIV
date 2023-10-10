import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrocoloradoEngComponent } from './barrocolorado-eng.component';

describe('BarrocoloradoEngComponent', () => {
  let component: BarrocoloradoEngComponent;
  let fixture: ComponentFixture<BarrocoloradoEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrocoloradoEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrocoloradoEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
