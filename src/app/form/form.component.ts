import { Component, OnInit } from '@angular/core';
import { Exchange } from '../exchange'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  currencies = ["USD", "EUR", "CAD", "CZK", "GBP"];
  model = new Exchange("USD")
  constructor() { }

  ngOnInit(): void {
    
  }
  newExchange(){
    this.model = new Exchange("USD")
    console.log(this.model)
  }
  submitted = false;

  onSubmit() { this.submitted = true; }
}
