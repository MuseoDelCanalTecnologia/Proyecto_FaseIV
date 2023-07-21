import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagoGatunComponent } from './lago-gatun.component';

describe('LagoGatunComponent', () => {
  let component: LagoGatunComponent;
  let fixture: ComponentFixture<LagoGatunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagoGatunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LagoGatunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
