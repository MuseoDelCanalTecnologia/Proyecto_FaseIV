import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtAmadorComponent } from './ft-amador.component';

describe('FtAmadorComponent', () => {
  let component: FtAmadorComponent;
  let fixture: ComponentFixture<FtAmadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtAmadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtAmadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
