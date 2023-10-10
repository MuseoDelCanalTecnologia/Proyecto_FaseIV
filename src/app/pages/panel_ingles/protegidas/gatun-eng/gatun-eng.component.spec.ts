import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatunEngComponent } from './gatun-eng.component';

describe('GatunEngComponent', () => {
  let component: GatunEngComponent;
  let fixture: ComponentFixture<GatunEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatunEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatunEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
