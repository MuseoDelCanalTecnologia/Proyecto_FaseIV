import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KobbeEngComponent } from './kobbe-eng.component';

describe('KobbeEngComponent', () => {
  let component: KobbeEngComponent;
  let fixture: ComponentFixture<KobbeEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KobbeEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KobbeEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
