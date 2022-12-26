import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedbookComponent } from './allocatedbook.component';

describe('AllocatedbookComponent', () => {
  let component: AllocatedbookComponent;
  let fixture: ComponentFixture<AllocatedbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocatedbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
