import { Component, OnInit, Input } from '@angular/core';
import { SearchProfiles } from '../../models/SearchProfiles.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() data: SearchProfiles = {} as SearchProfiles;

  constructor() { }

  ngOnInit(): void {
  }

}
