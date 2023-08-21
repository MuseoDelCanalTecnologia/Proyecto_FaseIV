import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagatunComponent } from './plagatun.component';

describe('PlagatunComponent', () => {
  let component: PlagatunComponent;
  let fixture: ComponentFixture<PlagatunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagatunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlagatunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
