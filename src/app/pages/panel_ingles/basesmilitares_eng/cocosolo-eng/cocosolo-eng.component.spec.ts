import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocosoloEngComponent } from './cocosolo-eng.component';

describe('CocosoloEngComponent', () => {
  let component: CocosoloEngComponent;
  let fixture: ComponentFixture<CocosoloEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocosoloEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocosoloEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
