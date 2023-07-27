import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RioGatunComponent } from './rio-gatun.component';

describe('RioGatunComponent', () => {
  let component: RioGatunComponent;
  let fixture: ComponentFixture<RioGatunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RioGatunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RioGatunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
