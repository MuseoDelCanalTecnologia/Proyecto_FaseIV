import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbrookVisorComponent } from './albrook-visor.component';

describe('AlbrookVisorComponent', () => {
  let component: AlbrookVisorComponent;
  let fixture: ComponentFixture<AlbrookVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbrookVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbrookVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
