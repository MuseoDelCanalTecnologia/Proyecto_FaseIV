import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantEngComponent } from './grant-eng.component';

describe('GrantEngComponent', () => {
  let component: GrantEngComponent;
  let fixture: ComponentFixture<GrantEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrantEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
