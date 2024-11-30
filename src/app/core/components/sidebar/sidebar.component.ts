import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  //The default space is te social space (true)
  space: boolean = true;

  constructor(
    private sharedDataService : SharedDataService
  ) { }

  ngOnInit(): void {
    this.sharedDataService.currentSpace$.subscribe((value) => {
      this.space = value; // Change value (space)
    });
  }




}
