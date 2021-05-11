import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exchanges } from './exchange';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dates: any [] = [];
  public links: string [] = [];
  public request: any [] = [];
  public responses: any[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }
  private _exchanges: Exchanges = {currency: '', startDate: new Date(), endDate: new Date()};
  addExchange(exchange: Exchanges) {
    this._exchanges = exchange;
  }
  makeNewDate(){
    for (let i = this._exchanges.startDate.getTime(); i < this._exchanges.endDate.getTime(); i + 86400000 ){
      this.dates.push(i)
    }
  }
  showListOfDate(){
    function add(n: number){
      let str = n.toString();
      return (str.length < 2) ? `0${str}` : str;
    }
    const startS = new Date(this._exchanges.startDate).getTime();
    const endS = new Date(this._exchanges.endDate).getTime();
    let dateLayer = []
    let dates = []
    function* generateRange(end: number, start: number, step = 86400000) {
      
      let x = start - step;
      while(x <= end - step) yield x += step;
    }

    const gen5 = generateRange(endS, startS);
    let x = gen5.next();

    while (!x.done) {
      dateLayer.push(new Date(x.value))
      this.dates = dateLayer.map((item: any) => `${item.getFullYear()}${add(item.getMonth() + 1)}${add(item.getDate())}`)
      x = gen5.next();
    } 
    this.links = this.dates.map((data: string) => `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${this._exchanges.currency}&date=${data}&json`)
    this.request = this.links.map((link: string) => this.httpClient.get(link))
  }
}
