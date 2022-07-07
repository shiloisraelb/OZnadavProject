import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrooTableComponent } from './groo-table.component';

describe('GrooTableComponent', () => {
  let component: GrooTableComponent;
  let fixture: ComponentFixture<GrooTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrooTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrooTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
