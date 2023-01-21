import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocHttpComponent } from './poc-http.component';

describe('PocHttpComponent', () => {
  let component: PocHttpComponent;
  let fixture: ComponentFixture<PocHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
