import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersResponse } from '../models/userModel';

@Injectable({
  providedIn: 'root'    // this service can be acessible the entire application
})
export class MyUserServiceService {

  header = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:7000/users',{
        headers: this.header
      }
    );
  }

getUserById(id: number): Observable<any>{
  return this.httpClient.get<any>(
    `http://localhost:7000/users/${id}`,{
      headers: this.header
    }
  );
}

}
