import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocosoloVisorComponent } from './cocosolo-visor.component';

describe('CocosoloVisorComponent', () => {
  let component: CocosoloVisorComponent;
  let fixture: ComponentFixture<CocosoloVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocosoloVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocosoloVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
