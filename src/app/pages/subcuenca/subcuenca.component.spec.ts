import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcuencaComponent } from './subcuenca.component';

describe('SubcuencaComponent', () => {
  let component: SubcuencaComponent;
  let fixture: ComponentFixture<SubcuencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcuencaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcuencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
