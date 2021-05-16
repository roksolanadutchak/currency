import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  tasks: any = {}
  responses: any[] = []
  constructor(private _dataService: DataService) { 

  }
  makeCall(){
      forkJoin([...this._dataService.request]).subscribe((result: any) => {
        this.responses = result.map((i: any) => i[0]);
      })
    }
}
