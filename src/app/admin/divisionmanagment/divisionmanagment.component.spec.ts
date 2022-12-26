import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionmanagmentComponent } from './divisionmanagment.component';

describe('DivisionmanagmentComponent', () => {
  let component: DivisionmanagmentComponent;
  let fixture: ComponentFixture<DivisionmanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionmanagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
