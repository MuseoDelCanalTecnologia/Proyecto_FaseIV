import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaviesComponent } from './davies.component';

describe('DaviesComponent', () => {
  let component: DaviesComponent;
  let fixture: ComponentFixture<DaviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
