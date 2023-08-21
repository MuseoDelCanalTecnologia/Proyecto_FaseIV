import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KobbeComponent } from './kobbe.component';

describe('KobbeComponent', () => {
  let component: KobbeComponent;
  let fixture: ComponentFixture<KobbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KobbeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KobbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
