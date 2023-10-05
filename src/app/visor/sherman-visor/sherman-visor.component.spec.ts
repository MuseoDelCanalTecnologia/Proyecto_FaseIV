import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShermanVisorComponent } from './sherman-visor.component';

describe('ShermanVisorComponent', () => {
  let component: ShermanVisorComponent;
  let fixture: ComponentFixture<ShermanVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShermanVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShermanVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
