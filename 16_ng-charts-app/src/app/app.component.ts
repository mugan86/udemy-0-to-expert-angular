import { Component, OnInit } from '@angular/core';
import { FilesLoadService } from './services/files-load.service';
import { Activity } from './interfaces/activity.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  selectActivity: Activity;
  bpm = 0;
  fcs: number[] = [];
  elevations: number[] = [];
  distanciaLabels: number[] = [];
  ready = false;

  //
  // lineChart
  public lineChartData1: Array<any> = [];
  public lineChartData2: Array<any> = [];

  public lineChartLabels: Array<string> = [];
  public lineChartOptions1: any = [];
  public lineChartOptions2: any = [];
  public lineChartColors1: Array<any> = [];
  public lineChartColors2: Array<any> = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  constructor(private filesLoadService: FilesLoadService) { }

  ngOnInit(): void {
    this.filesLoadService.getJSON('11_08_2017_malgrat').subscribe((res: Activity) => {
      this.selectActivity = res;
      console.log(this.selectActivity.dist);
      console.log(this.selectActivity.high);
      for (let i = 0; i < this.selectActivity.points.length; i++) {
        const p = this.selectActivity.points[i];
        if (p.hr > 0) {
          this.bpm = this.bpm + p.hr;
          this.fcs.push(p.hr);
        }
        this.elevations.push(p.ele);
        this.distanciaLabels.push(this.round(p.total, 2));
      }
      const max_of_array = Math.max.apply(Math, this.elevations);
      const min_of_array = Math.min.apply(Math, this.elevations);
      console.log('Max altitude', max_of_array);
      console.log('Min altitude', min_of_array);
      console.log(this.distanciaLabels);
      console.log(this.elevations);
      console.log(this.fcs);
      console.log(this.bpm / this.fcs.length);

      this.drawChart('hrmChart', this.fcs, this.distanciaLabels, 'red', 80, this.selectActivity.dist, 'ppm (FC)', 'Distance (km)');
    });
  }

  drawChart(id, yValues, xValues, color, minY, totalDistance, yLabel, xLabel) {
    // Chart create
    const colors = {
      green: {
        fill: '#e0eadf',
        stroke: '#5eb84d'
      },
      lightBlue: {
        stroke: '#6fccdd'
      },
      darkBlue: {
        fill: '#92bed2',
        stroke: '#3282bf'
      },
      purple: {
        fill: '#8fa8c8',
        stroke: '#75539e'
      },
      red: {
        fill: '#ff9999',
        stroke: '#cc0000'
      }
    };
    this.lineChartColors1.push(
    { // dark green
      backgroundColor: colors.red.fill,
      borderColor: colors.red.stroke,
      pointBackgroundColor: colors.red.fill,
      pointBorderColor: colors.red.stroke,
      pointHoverBackgroundColor: colors.red.fill,
      pointHoverBorderColor: colors.red.fill
    });
    this.lineChartColors2.push(
      { // dark green
        backgroundColor: colors.green.fill,
        borderColor: colors.green.stroke,
        pointBackgroundColor: colors.green.fill,
        pointBorderColor: colors.green.stroke,
        pointHoverBackgroundColor: colors.green.fill,
        pointHoverBorderColor: colors.green.fill
      });
    this.lineChartData1.push({ data: yValues, label: 'Activity FC' });
    this.lineChartData2.push({ data: this.elevations, label: 'Altitude (m)' });
    this.lineChartLabels = xValues;
    this.lineChartOptions1 = {
      responsive: true,
      scales: {
        yAxes: [{
          display: true,
          stacked: true,
          suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
          ticks: {
            stepSize: 20
          }
        }],

        xAxes: [{
          display: true,
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: xLabel,
            fontStyle: 'bold'
          },
          ticks: {
            callback: function (value) {
              // return Math.round(value);
              return parseFloat(value).toFixed(2);
            },
            autoSkip: true,
            maxTicksLimit: this.round(totalDistance, 0) + 1,
            stepSize: 1.0,
            maxRotation: 0,
            minRotation: 0
          }
        }]
      },
      elements: {
        point: { radius: 0 },
        line: {
          tension: 0, // disables bezier curves
        }
      },
      animation: {
        duration: 750
      }
    };
    this.lineChartOptions2 = {
      responsive: true,
      scales: {
        yAxes: [{
          display: true,
          stacked: true,
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 750,
            min: 600
          }
        }],

        xAxes: [{
          display: true,
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: xLabel,
            fontStyle: 'bold'
          },
          ticks: {
            callback: function (value) {
              // return Math.round(value);
              return parseFloat(value).toFixed(2);
            },
            autoSkip: true,
            maxTicksLimit: this.round(totalDistance, 0) + 1,
            stepSize: 1.0,
            maxRotation: 0,
            minRotation: 0
          }
        }]
      },
      elements: {
        point: { radius: 0 },
        line: {
          tension: 0, // disables bezier curves
        }
      },
      animation: {
        duration: 750
      }
    };
    this.ready = true;
  }

  round(number, precision) {
    const factor = Math.pow(10, precision);
    const tempNumber = number * factor;
    const roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }
}
