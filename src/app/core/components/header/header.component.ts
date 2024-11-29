import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //The default space is te social space (true)
  space : boolean = true;


  constructor(
    private sharedDataService : SharedDataService
  ) { }

  ngOnInit(): void {
    this.sharedDataService.currentSpace$.subscribe((value) => {
      this.space = value; // Change value (space)
    });
  }

  changeToSocial(){
    //When is true, we are in the social space
    this.sharedDataService.changeSpace(true);
  }

  changeToPersonal(){
    //When is false, we are in the personal space
    this.sharedDataService.changeSpace(false);
  }

}
