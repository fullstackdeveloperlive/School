import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllexamComponent } from './allexam.component';

describe('AllexamComponent', () => {
  let component: AllexamComponent;
  let fixture: ComponentFixture<AllexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
