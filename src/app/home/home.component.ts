import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks: any = {}
  constructor(private dataService: DataService) { 
    
  }

  // ngOnInit() {
  //   this.dataService.sendGetRequest().subscribe((data)=>{
  //     this.tasks = data;
  //     console.log(data)
  //   })
  // }
  // displayTask(data){
  //   this.tasks = data;
  // }
}
