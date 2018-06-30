import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-lines',
  templateUrl: './graphic-lines.component.html',
  styleUrls: ['./graphic-lines.component.css']
})
export class GraphicLinesComponent {
  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40, 4, 21, 23, 34, 45, 23], label: 'Precipitations 2016' },
    { data: [28, 48, 40, 19, 86, 27, 90, 45, 23, 23, 34, 12, 65], label: 'Precipitations 2017' },
    { data: [18, 48, 77, 9, 100, 27, 0, 4, 89, 56, 56, 1, 90], label: 'Precipitations 2018' }
  ];

  public lineChartLabels: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June',
                                            'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // yellow
      backgroundColor: 'rgba(255, 204, 0, 0.2)',
      borderColor: 'rgba(255, 204, 0, 1)',
      pointBackgroundColor: 'rgba(255, 204, 0, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#ffcc00',
      pointHoverBorderColor: 'rgba(255, 204, 0, 0.8)'
    },
    { // dark green
      backgroundColor: 'rgba(0, 102, 0, 0.2)',
      borderColor: 'rgba(0, 102, 0, 1)',
      pointBackgroundColor: 'rgba(0, 102, 0, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#006600',
      pointHoverBorderColor: 'rgba(0, 102, 0, 0.8)'
    },
    { // ligh blue
      backgroundColor: 'rgba(0, 153, 230, 0.2)',
      borderColor: 'rgba(0, 153, 230, 1)',
      pointBackgroundColor: 'rgba(0, 153, 230, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#0099e6',
      pointHoverBorderColor: 'rgba(0, 153, 230, 0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
