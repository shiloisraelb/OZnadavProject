import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SityTableComponent } from './sity-table.component';

describe('SityTableComponent', () => {
  let component: SityTableComponent;
  let fixture: ComponentFixture<SityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SityTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
