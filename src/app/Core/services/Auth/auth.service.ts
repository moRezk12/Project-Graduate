import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // login
  login(data: any) {
    return this.http.post('http://localhost:3000/auth/login', data);
  }

  // register
  register(data: any) {
    return this.http.post('http://localhost:3000/auth/register', data);
  }

  

}
