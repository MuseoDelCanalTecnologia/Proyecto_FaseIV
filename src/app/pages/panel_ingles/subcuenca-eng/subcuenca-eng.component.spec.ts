import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcuencaEngComponent } from './subcuenca-eng.component';

describe('SubcuencaEngComponent', () => {
  let component: SubcuencaEngComponent;
  let fixture: ComponentFixture<SubcuencaEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcuencaEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcuencaEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
