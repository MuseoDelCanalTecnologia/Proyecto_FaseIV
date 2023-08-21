import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocosoloComponent } from './cocosolo.component';

describe('CocosoloComponent', () => {
  let component: CocosoloComponent;
  let fixture: ComponentFixture<CocosoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocosoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocosoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
