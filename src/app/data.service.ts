import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //resp: Observable<Object>;
  constructor(
    private httpClient: HttpClient
  ) { }
  public sendGetRequest(): Observable<Object>{
    return this.httpClient.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20200302&json')
  }
}
