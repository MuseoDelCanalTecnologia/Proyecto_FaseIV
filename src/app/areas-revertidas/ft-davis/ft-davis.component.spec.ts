import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtDavisComponent } from './ft-davis.component';

describe('FtDavisComponent', () => {
  let component: FtDavisComponent;
  let fixture: ComponentFixture<FtDavisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtDavisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtDavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
