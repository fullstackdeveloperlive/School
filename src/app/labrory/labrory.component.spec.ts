import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabroryComponent } from './labrory.component';

describe('LabroryComponent', () => {
  let component: LabroryComponent;
  let fixture: ComponentFixture<LabroryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabroryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabroryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
