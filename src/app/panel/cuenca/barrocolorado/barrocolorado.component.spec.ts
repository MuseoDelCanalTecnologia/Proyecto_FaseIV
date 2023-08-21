import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBarrocoloradoComponent } from './barrocolorado.component';

describe('BarrocoloradoComponent', () => {
  let component: PanelBarrocoloradoComponent;
  let fixture: ComponentFixture<PanelBarrocoloradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelBarrocoloradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelBarrocoloradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
