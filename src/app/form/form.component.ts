import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Exchanges } from '../exchange'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  currencies = ["USD", "EUR", "CAD", "CZK", "GBP"];
  tasks: any = {}
  // model = new Exchange("USD")
  // constructor() { }

  // ngOnInit(): void {
    
  // }
  // newExchange(){
  //   this.model = new Exchange("USD")
  //   console.log(this.model)
  // }
  // submitted = false;

  // onSubmit() { this.submitted = true; }
  public _exchanges: Exchanges = {currency: '', startDate: new Date(), endDate: new Date()}
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
  public printItems(){
    console.log('exchange in app');
    console.log(this._dataService.getItems());
 }
 public printExchanges(){
   console.log(this._dataService.getExchanges());
 }
 public showExchange(){
  this._dataService.sendGetRequest().subscribe((data)=>{
    this.tasks = data;
    console.log(data)
  })
 }
}
