import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {forkJoin} from 'rxjs';
import { of } from 'rxjs';
import {IItem} from './item';
import { Exchanges } from './exchange';
// import { Response } from './response';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //resp: Observable<Object>;
  public dates: any [] = [];
  public links: string [] = [];
  public request: any [] = [];
  public responses: any[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }
  public sendGetRequest(): Observable<Object>{
    return this.httpClient.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${this._exchanges.currency}&date=${Number(this._exchanges.startDate.toString().replace(/-/gi, ''))}&json`)
  }
 
  private _items:IItem[] = [];
  
    addItem(item: IItem) {
        this._items.push(item);
    }
 
    getItems(): IItem[] {
        return this._items;
    }
  private _exchanges: Exchanges = {currency: '', startDate: new Date(), endDate: new Date()};
  addExchange(exchange: Exchanges) {
    this._exchanges = exchange;
  }
  getExchanges(): Exchanges {
    console.log(this._exchanges)
    return this._exchanges;
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
    //console.log(end)
    let dateLayer = []
    let dates = []
    function* generateRange(end: number, start: number, step = 86400000) {
      
      let x = start - step;
      while(x <= end - step) yield x += step;
    }

    const gen5 = generateRange(endS, startS);
    let x = gen5.next();

    while (!x.done) {
      console.log(x.value);
      dateLayer.push(new Date(x.value))
      this.dates = dateLayer.map((item: any) => `${item.getFullYear()}${add(item.getMonth() + 1)}${add(item.getDate())}`)
      x = gen5.next();
    } 
    console.log(this.dates)
    this.links = this.dates.map((data: string) => `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${this._exchanges.currency}&date=${data}&json`)
    console.log(this.links)
    this.request = this.links.map((link: string) => this.httpClient.get(link))
  }
  
  // makeCall(){
  //   forkJoin([...this.request]).subscribe(result => {
  //     this.responses = result
  //     console.log(this.responses)
  //   })
  // }
}
