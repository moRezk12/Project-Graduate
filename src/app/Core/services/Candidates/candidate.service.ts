import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  // Get all candidates
  getCandidates():Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/Candidates`);
  }

  // Get candidate by id
  getCandidateById(id: number):Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/Candidates/:${id}`);
  }

  // Create Candidate
  createCandidate(data: any):Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/Candidates`, data);
  }

  // Update Candidate by id
  updateCandidate(id: number, data: any):Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/api/Candidates/:${id}`, data);
  }

  // Delete Candidate by id
  deleteCandidate(id: number):Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/api/Candidates/:${id}`);
  }

}
