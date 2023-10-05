import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaviesVisorComponent } from './davies-visor.component';

describe('DaviesVisorComponent', () => {
  let component: DaviesVisorComponent;
  let fixture: ComponentFixture<DaviesVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaviesVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaviesVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
