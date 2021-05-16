import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent  {
  @Input() dataResponse: any
  chart: any;
  constructor() { }
  // const labels = Utils.months({count: 7});
  openChart(){
    console.log(this.dataResponse)
    Chart.register(...registerables);
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.dataResponse.map((item : any) => item.exchangedate),
        datasets: [{
          label: 'My First Dataset',
          data: this.dataResponse.map((item : any) => item.rate),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
    }
  });
}
}