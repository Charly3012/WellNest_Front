import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from '../models/Note';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  apiUrl:string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }


  hello():string{
    return "Hola bola";
  }

  getUserNotes(): Observable<Note[]>{
    return this.http.get<any>(`${this.apiUrl}/api/v1/note/GetUserNotes`);
  }

  insertNote(contentNote: string): Observable<any>{
    const url = `${this.apiUrl}/api/v1/note/InsertNote`;
    const note = {
      content: contentNote,
      state: false
    }
    return this.http.post(url, note);
  }

  changeNoteState(idNote: number){
    const url = `${this.apiUrl}/api/v1/note/changeState/${idNote}`;
    return this.http.post(url, {});
  }
}
