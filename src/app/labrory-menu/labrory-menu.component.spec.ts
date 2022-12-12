import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabroryMenuComponent } from './labrory-menu.component';

describe('LabroryMenuComponent', () => {
  let component: LabroryMenuComponent;
  let fixture: ComponentFixture<LabroryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabroryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabroryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
