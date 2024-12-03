import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/Note';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goals: Note[] = []; // Metas
  achievements: Note[] = []; // Logros

  constructor(private personalService: PersonalService) {}

  ngOnInit() {
    this.loadGoals();
  }

  loadGoals() {
    this.personalService.loadGoals().subscribe(
      (response: Note[]) => {
        // Separa metas y logros
        this.goals = response.filter(note => !note.state);
        this.achievements = response.filter(note => note.state);
      },
      (error) => {
        console.error('Error al obtener las metas:', error);
      }
    );
  }

  addGoal(content: string) {
    if (!content.trim()) {
      console.error('El contenido de la meta no puede estar vacío');
      return;
    }

    this.personalService.addGoal(content).subscribe(
      (response: Note) => {
        //this.goals.push(response); // Añade la nueva meta a la lista de metas
        this.loadGoals();
      },
      (error) => {
        console.error('Error al agregar la meta:', error);
      }
    );
  }

  markAsDone(note: Note) {
    // Cambia el estado de la meta
    note.state = !note.state;

    // Actualiza en el servidor
    this.personalService.changeNoteState(note.id).subscribe(
      () => {
        // Mueve la meta entre las listas dinámicamente
        if (note.state) {
          this.goals = this.goals.filter(goal => goal.id !== note.id);
          this.achievements.push(note);
        } else {
          this.achievements = this.achievements.filter(achievement => achievement.id !== note.id);
          this.goals.push(note);
        }
      },
      (error) => {
        console.error('Error al cambiar el estado:', error);
        // Revertir el estado en caso de error
        note.state = !note.state;
      }
    );
  }
}
