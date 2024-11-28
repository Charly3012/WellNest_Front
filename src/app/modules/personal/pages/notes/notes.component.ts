import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { Console, error } from 'console';
import { InsertNote, Note } from '../../models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notas: Note[] = [];
  goals: Note[] = [];
  achievements: Note[] = [];

  constructor(
    private personalService: PersonalService
  ) { }

  ngOnInit(): void {
    this.loadGoals();
  }

  loadGoals(): void{
    this.personalService.getUserNotes().subscribe(
      (data) =>{
        this.notas = data;
        this.goals = data.filter(note => !note.state);
        this.achievements = data.filter(note => note.state);
        console.log('notas', this.notas);
        console.log('goals', this.goals);
        console.log('achivements', this.achievements);
      },
      (error) =>{
        console.log('Error en la peticion', error)
      }
    )
  }

  addGoal(content: string) {
    this.personalService.insertNote(content).subscribe(
      (response) => {
        this.loadGoals();
      },
      (error) => {
        console.error('Error al insertar la nota: ', error);
      }
    )
  }

  markAsDone(idNote: number){
    this.personalService.changeNoteState(idNote).subscribe(
      (reponse) => {
        this.loadGoals();
      },
      (error) =>{
        console.error('Error al cambiar el estado: ', error);
      }
    )
  }


}
