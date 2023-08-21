import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasprotegidasComponent } from './areasprotegidas.component';

describe('AreasprotegidasComponent', () => {
  let component: AreasprotegidasComponent;
  let fixture: ComponentFixture<AreasprotegidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasprotegidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasprotegidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
