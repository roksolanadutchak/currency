import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent {

  constructor(private _dataService: DataService) { }
  public printItems(){
    console.log('items in warehouse:');
    console.log(this._dataService.getItems());
 }
  

}
