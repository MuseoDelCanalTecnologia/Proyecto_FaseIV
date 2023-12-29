import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeopanamaxComponent } from './neopanamax.component';

describe('NeopanamaxComponent', () => {
  let component: NeopanamaxComponent;
  let fixture: ComponentFixture<NeopanamaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeopanamaxComponent]
    });
    fixture = TestBed.createComponent(NeopanamaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
