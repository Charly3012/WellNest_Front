import { Component, OnInit } from '@angular/core';
import { SearchProfiles } from '../../models/SearchProfiles.model';
import { SocialService } from '../../services/social.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
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
        console.log(response);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
