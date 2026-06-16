import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyQuoteServiceService {
  
  header = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private httpClient: HttpClient) { }


  getAllQuotes(): Observable<any> {
    return this.httpClient.get<any>(
      'https://dummyjson.com/quotes', {
        headers: this.header
      }
    );
  }
}
