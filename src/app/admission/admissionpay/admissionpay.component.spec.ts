import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionpayComponent } from './admissionpay.component';

describe('AdmissionpayComponent', () => {
  let component: AdmissionpayComponent;
  let fixture: ComponentFixture<AdmissionpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
