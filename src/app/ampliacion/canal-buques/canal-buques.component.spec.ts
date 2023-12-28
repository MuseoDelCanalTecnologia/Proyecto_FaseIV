import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalBuquesComponent } from './canal-buques.component';

describe('CanalBuquesComponent', () => {
  let component: CanalBuquesComponent;
  let fixture: ComponentFixture<CanalBuquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanalBuquesComponent]
    });
    fixture = TestBed.createComponent(CanalBuquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
