import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtGrantComponent } from './ft-grant.component';

describe('FtGrantComponent', () => {
  let component: FtGrantComponent;
  let fixture: ComponentFixture<FtGrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtGrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
