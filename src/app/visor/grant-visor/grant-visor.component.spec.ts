import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantVisorComponent } from './grant-visor.component';

describe('GrantVisorComponent', () => {
  let component: GrantVisorComponent;
  let fixture: ComponentFixture<GrantVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrantVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
