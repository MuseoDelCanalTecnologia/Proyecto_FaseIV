import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodmanEngComponent } from './rodman-eng.component';

describe('RodmanEngComponent', () => {
  let component: RodmanEngComponent;
  let fixture: ComponentFixture<RodmanEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodmanEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodmanEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
