import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: any;
  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
  }

  getUserList(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
