import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodmanVisorComponent } from './rodman-visor.component';

describe('RodmanVisorComponent', () => {
  let component: RodmanVisorComponent;
  let fixture: ComponentFixture<RodmanVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodmanVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodmanVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
