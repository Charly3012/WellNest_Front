import { Component, OnInit } from '@angular/core';
import { SocialService } from '../../services/social.service';
import { SearchProfiles } from '../../models/SearchProfiles.model';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { UserSearchResult } from '../../modules/Profile';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';  // Almacena la consulta de búsqueda
  users: UserSearchResult[] = [];
  private searchSubject = new Subject<string>();
  searchedProfiles: SearchProfiles[] = [];
  public queryToSearch: string = '';

  constructor(
    private socialService: SocialService
  ) { }

  ngOnInit(): void {
  }

  // Esta función se ejecuta cada vez que el usuario escribe o borra
  onInputChange(event: any) {
    const query = event.target.value;
    this.loadProfileSearch();
  }

  loadProfileSearch() {
    this.socialService.searchByNickname(this.queryToSearch).subscribe(
      (response) => {
        this.searchedProfiles = response;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
