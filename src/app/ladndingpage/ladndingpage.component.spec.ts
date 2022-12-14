import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadndingpageComponent } from './ladndingpage.component';

describe('LadndingpageComponent', () => {
  let component: LadndingpageComponent;
  let fixture: ComponentFixture<LadndingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadndingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadndingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
