import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  constructor(private http: HttpClient) { }

  // Get all Elections
  getElections():Observable<any> {
    // , { headers: { Authorization: `Bearer ${token}` } }
  return this.http.get<any>(`${environment.apiUrl}/api/Elections`);
  }

  // Get Election by id
  getElectionById(id: number):Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/Elections/${id}`);
  }

  // Create Election
  createElection(data: any):Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/Elections`, data);
  }

  // Update Election by id
  updateElection(id: number, data: any):Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/api/Elections/${id}`, data);
  }

  // Delete Election by id
  deleteElection(id: number):Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/api/Elections/${id}`);
  }


}
