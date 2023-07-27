import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtKobbeComponent } from './ft-kobbe.component';

describe('FtKobbeComponent', () => {
  let component: FtKobbeComponent;
  let fixture: ComponentFixture<FtKobbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtKobbeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtKobbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
