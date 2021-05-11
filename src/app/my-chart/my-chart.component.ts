import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  @Input() dataResponse? : any
  options: any;
  updateOptions: any;
  responses: any[] = []
  private oneDay = 24 * 3600 * 1000;
  private dates: any[] = [];
  private valueArr: any[] = []
  //start is old now
  private start: Date = new Date();
  //private firstDate: any = this.dataResponse[0].exchangedate
  private value: number  = 0;
  private data: any[] = [];
  private timer: any;

  constructor( ) { }
  
  showChart(){
    let dataLayer = []
     for (let data of this.dataResponse){
      this.valueArr.push(data.rate);
      dataLayer.push(data.exchangedate);
     }
     this.dates = dataLayer.map(item=> item.split('.').join(' '))
    console.log('Hello World');
    console.log(this.dates)
    console.log(this.dataResponse)
     console.log(this.valueArr)
    this.data = [];
    this.start = new Date(this.dates[0]);
    //this.value = Math.random() * 1000;

    for (let i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }
    this.options = {
      title: {
        text: 'Currency Exchange'
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params : any) => {
          params = params[0];
          const date = new Date(this.dates[0]);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [{
        name: 'Mocking Data',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data
      }]
    };
    this.timer = setInterval(() => {
      for (let i = 0; i < 7; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }

      // update series data:
      this.updateOptions = {
        series: [{
          data: this.data
        }]
      };
    }, 1000);
  }
  stop(){
    clearInterval(this.timer)
  }
  ngOnInit(): void {
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  randomData() {
    this.start= new Date(this.start.getTime() + this.oneDay);
    for (let i = 0; i < this.valueArr.length; i++){
      this.value = this.valueArr[i]
    }
    return {
      name: this.start.toString(),
      value: [
        [this.start.getFullYear(), this.start.getMonth() + 1, this.start.getDate()].join('/'),
        Math.round(this.value)
      ]
    };
  }
}

