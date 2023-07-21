import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtClaytonComponent } from './ft-clayton.component';

describe('FtClaytonComponent', () => {
  let component: FtClaytonComponent;
  let fixture: ComponentFixture<FtClaytonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtClaytonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtClaytonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
