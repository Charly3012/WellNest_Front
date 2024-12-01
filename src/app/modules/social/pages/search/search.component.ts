import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../modules/Profile';
import { SocialService } from '../../services/social.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';  // Almacena la consulta de búsqueda
  users: Profile[] = [];
  

  constructor(    private socialService: SocialService,
    private router: Router) { }

  ngOnInit(): void {
  }

  searchUsers(): void {
    if (this.searchQuery.length >= 3) {  // Solo busca si la consulta tiene al menos 3 caracteres
      this.socialService.searchUsers(this.searchQuery).subscribe({
        next: (result: Profile[]) => {
          this.users = result;  // Almacenar los resultados en el arreglo `users`
        },
        error: (error) => {
          console.error('Error al buscar usuarios:', error);
        }
      });
    } else {
      this.users = [];  // Limpiar los resultados si la búsqueda es menor de 3 caracteres
    }
  }

}
