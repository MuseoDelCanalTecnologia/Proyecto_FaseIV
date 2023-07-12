import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSocketComponent } from './portal-socket.component';

describe('PortalSocketComponent', () => {
  let component: PortalSocketComponent;
  let fixture: ComponentFixture<PortalSocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalSocketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
