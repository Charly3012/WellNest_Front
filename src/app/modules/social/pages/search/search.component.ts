import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { UserSearchResult } from '../../modules/Profile';
import { SocialService } from '../../services/social.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';  // Almacena la consulta de búsqueda
  users: UserSearchResult[] = [];
  private searchSubject = new Subject<string>();
  

  constructor(    private socialService: SocialService,
    private router: Router) { }

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(300)).subscribe((query) => {
      this.executeSearch(query);
    });
  }

  searchUsers(): void {
    if (this.searchQuery.length >= 3) {
      this.searchSubject.next(this.searchQuery);
    } else {
      this.users = [];
    }
  }

  private executeSearch(query: string): void {
    this.socialService.searchUsers(query).subscribe({
      next: (result: UserSearchResult[]) => {
        console.log('Usuarios encontrados:', result);
        this.users = result;
      },
      error: (error) => {
        console.error('Error al buscar usuarios:', error);
      },
    });
  }


  loadPrfileSearch() {

  }
}
