import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCustomerdCustomerComponent } from './ad-customerd-customer.component';

describe('AdCustomerdCustomerComponent', () => {
  let component: AdCustomerdCustomerComponent;
  let fixture: ComponentFixture<AdCustomerdCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCustomerdCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCustomerdCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
