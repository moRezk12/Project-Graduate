import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  constructor(private http: HttpClient) { }

  // Get all Voters
  getVoters():Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/Voting`);
  }

  // Get Voters Results
  getVotersResults():Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/Voting/results`);
  }

  // Create Voter
  createVoter(data: any):Observable<string> {
    return this.http.post(`${environment.apiUrl}/api/Voting`, data ,  { responseType: 'text' } );
  }

}
