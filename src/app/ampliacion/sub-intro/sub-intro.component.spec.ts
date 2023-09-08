import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubIntroComponent } from './sub-intro.component';

describe('SubIntroComponent', () => {
  let component: SubIntroComponent;
  let fixture: ComponentFixture<SubIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
