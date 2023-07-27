import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtShermanComponent } from './ft-sherman.component';

describe('FtShermanComponent', () => {
  let component: FtShermanComponent;
  let fixture: ComponentFixture<FtShermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtShermanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtShermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
