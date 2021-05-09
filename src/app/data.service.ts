import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IItem} from './item';
import { Exchanges } from './exchange';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //resp: Observable<Object>;
  constructor(
    private httpClient: HttpClient
  ) { }
  public sendGetRequest(): Observable<Object>{
    return this.httpClient.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${this._exchanges.currency}&date=${Number(this._exchanges.startDate.toString().replace(/-/gi, ''))}&json`)
  }
  private _items:IItem[] = [];
  private dates: Number [] = []
 
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
    const startS = new Date(this._exchanges.startDate).getTime();
    const endS = new Date(this._exchanges.endDate).getTime();
    //console.log(end)
    function* generateRange(end: number, start: number, step = 86400000) {
      let x = start - step;
      while(x <= end - step) yield x += step;
    }

    const gen5 = generateRange(endS, startS);
    let x = gen5.next();

    while (!x.done) {
      console.log(x.value);
      this.dates.push(x.value)
      x = gen5.next();
    } 
    console.log(this.dates)
  }
  
}
