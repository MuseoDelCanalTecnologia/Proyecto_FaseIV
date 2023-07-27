import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtGulickComponent } from './ft-gulick.component';

describe('FtGulickComponent', () => {
  let component: FtGulickComponent;
  let fixture: ComponentFixture<FtGulickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtGulickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtGulickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
