import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Binnacle } from '../models/Binnacle';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private apiUrl: string = environment.apiUrl;


  constructor(private http: HttpClient) { }

  loadGoals(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl + '/api/v1/note/GetUserNotes');
  }
  addGoal(content: string): Observable<any> {
    const request = { content, state: false };
    return this.http.post(`${this.apiUrl}/api/v1/note/InsertNote`, request);
  }

  changeNoteState(idNote: number) {
    const url = `${this.apiUrl}/api/v1/note/changeState/${idNote}`;


    return this.http.post(url, {});
  }

  getUserBinnacles(): Observable<Binnacle[]> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/binnacle/getUserBinnacles`);
  }


  inserBinnacle(dataBinnacle: Binnacle): Observable<Binnacle> {
    return this.http.post<Binnacle>(`${this.apiUrl}/api/v1/binnacle/insertBinnacle`, dataBinnacle);
  }

  deleteBinnacle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/v1/binnacle/${id}`);
  }

}
