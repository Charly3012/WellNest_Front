import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  metas: any[] = [];
  logros: any[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadGoals();
  }
  loadGoals() {
    this.http.get<any[]>('/api/v1/demo/GetUserNotes').subscribe((notes) => {
      this.metas = notes.filter(note => !note.state);
      this.logros = notes.filter(note => note.state);
    });
  }
  
  
  addGoal(content: string) {
    const request = { content, state: false };
    this.http.post('/api/v1/demo/InsertNote', request).subscribe(() => this.loadGoals());
  }

  markAsDone(noteId: number) {
    this.http.patch(`/api/v1/demo/UpdateNoteState/${noteId}?state=true`, {}).subscribe(() => this.loadGoals());
  }

}

