import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  // Get all Voters
  getVoters():Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/Voters`);
  }

  // Get Voter by id
  getVoterById(id: number):Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/Voters/:${id}`);
  }

  // Create Voter
  createVoter(data: any):Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/Voters`, data);
  }

  // Delete Voter by id
  deleteVoter(id: number):Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/api/Voters/:${id}`);
  }
}
