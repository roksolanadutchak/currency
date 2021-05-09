import { Component, OnInit } from '@angular/core';
import {IItem} from '../item';
import { DataService } from '../data.service';
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {

  private _item:IItem = {name:'',description:'',price:0};
 
  constructor(private _dataService: DataService){}
 
 public get Item():IItem{
     return this._item;
 }
 
 public addItem(){
     const currentItem:IItem = {
         name:this._item.name,
         description:this._item.description,
         price:this._item.price
     };
 
    this._dataService.addItem(currentItem);
 }

}
