import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DataService } from '../data.service';
import { Exchanges } from '../exchange'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  currencies = ["USD", "EUR", "CAD", "CZK", "GBP"];
  public _exchanges: Exchanges = {currency: '', startDate: new Date(), endDate: new Date()}
  public listOfDate: Number [] = []
  constructor(private _dataService: DataService){}
  public get Exchanges(): Exchanges{
    return this._exchanges;
  }
  public addExchange(){
    const currentExchange: Exchanges = {
      currency: this._exchanges.currency,
      startDate: this._exchanges.startDate,
      endDate: this._exchanges.endDate
    };
    this._dataService.addExchange(currentExchange);
  }

 public showList(){
   this._dataService.showListOfDate();
 }
 public showExchange(){
  this.addExchange(),
  this.showList()
}
}