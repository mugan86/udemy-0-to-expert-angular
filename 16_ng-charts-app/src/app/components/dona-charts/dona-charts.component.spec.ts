import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaChartsComponent } from './dona-charts.component';

describe('DonaChartsComponent', () => {
  let component: DonaChartsComponent;
  let fixture: ComponentFixture<DonaChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonaChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonaChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
