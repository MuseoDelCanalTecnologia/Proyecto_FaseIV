import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChagresEngComponent } from './chagres-eng.component';

describe('ChagresEngComponent', () => {
  let component: ChagresEngComponent;
  let fixture: ComponentFixture<ChagresEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChagresEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChagresEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
