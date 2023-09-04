import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcuencasComponent } from './subcuencas.component';

describe('SubcuencasComponent', () => {
  let component: SubcuencasComponent;
  let fixture: ComponentFixture<SubcuencasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcuencasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcuencasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
