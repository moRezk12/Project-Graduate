import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // login
  login(data: any) {
    return this.http.post(`${environment.apiUrl}/api/Auth/login`, data);
  }

  // register
  register(data: any) {
    return this.http.post(`${environment.apiUrl}/api/Auth/register`, data);
  }



}
