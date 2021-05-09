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
}
