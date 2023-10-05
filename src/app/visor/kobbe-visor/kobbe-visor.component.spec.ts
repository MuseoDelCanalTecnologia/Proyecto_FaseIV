import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KobbeVisorComponent } from './kobbe-visor.component';

describe('KobbeVisorComponent', () => {
  let component: KobbeVisorComponent;
  let fixture: ComponentFixture<KobbeVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KobbeVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KobbeVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
