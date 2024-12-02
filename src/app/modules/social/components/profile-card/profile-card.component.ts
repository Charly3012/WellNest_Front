import { Component, OnInit, Input } from '@angular/core';
import { ProfileSearch } from '../../models/Profile';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() data!: ProfileSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
