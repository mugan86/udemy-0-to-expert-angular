import { TestBed, inject } from '@angular/core/testing';

import { DrawChartService } from './draw-chart.service';

describe('DrawChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawChartService]
    });
  });

  it('should be created', inject([DrawChartService], (service: DrawChartService) => {
    expect(service).toBeTruthy();
  }));
});
