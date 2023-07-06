import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalmapaComponent } from './canalmapa.component';

describe('CanalmapaComponent', () => {
  let component: CanalmapaComponent;
  let fixture: ComponentFixture<CanalmapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanalmapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanalmapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
