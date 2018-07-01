import { Injectable } from '@angular/core';

@Injectable()
export class DrawChartService {

  constructor() { }

  drawChartLine(yValues, xValues, color, minY, maxX, totalDistance, yLabel, xLabel) {
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
    const lineChartColors = [];
    const lineChartData = [];
    let lineChartLabels = [];
    let lineChartOptions = {};
    lineChartColors.push(
    { // dark green
        backgroundColor: colors[color].fill,
        borderColor: colors[color].stroke,
        pointBackgroundColor: colors[color].fill,
        pointBorderColor: colors[color].stroke,
        pointHoverBackgroundColor: colors.red.fill,
        pointHoverBorderColor: colors.red.fill
    });
    lineChartData.push({ data: yValues, label: yLabel });
    lineChartLabels = xValues;
    lineChartOptions = {
      responsive: true,
      scales: {
        yAxes: [{
          display: true,
          stacked: true,
          suggestedMin: minY,    // minimum will be 0, unless there is a lower value.
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
    return [lineChartColors, lineChartData, lineChartLabels, lineChartOptions];
  }

  round(number, precision) {
    const factor = Math.pow(10, precision);
    const tempNumber = number * factor;
    const roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }
}
