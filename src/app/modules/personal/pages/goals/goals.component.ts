import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  metas: any[] = [];
  logros: any[] = [];

  apiUrl: string = environment.apiUrl;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadGoals();
  }
  loadGoals() {
    this.http.get<any[]>(`${this.apiUrl}/api/v1/note/GetUserNotes`).subscribe((notes) => {
      this.metas = notes.filter(note => !note.state);
      this.logros = notes.filter(note => note.state);
    });
  }


  addGoal(content: string) {
    const request = { content, state: false };
    this.http.post(`${this.apiUrl}/api/v1/note/InsertNote`, request).subscribe(() => this.loadGoals());

  }

  markAsDone(noteId: number) {
    this.http.patch(`/api/v1/demo/UpdateNoteState/${noteId}?state=true`, {}).subscribe(() => this.loadGoals());
  }

}

