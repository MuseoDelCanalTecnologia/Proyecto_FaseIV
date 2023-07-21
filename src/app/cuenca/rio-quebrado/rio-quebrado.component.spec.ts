import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RioQuebradoComponent } from './rio-quebrado.component';

describe('RioQuebradoComponent', () => {
  let component: RioQuebradoComponent;
  let fixture: ComponentFixture<RioQuebradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RioQuebradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RioQuebradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
