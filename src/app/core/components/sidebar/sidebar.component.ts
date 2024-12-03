import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { StateComponent } from 'src/app/modules/social/pages/state/state.component';
import { SocialModule } from 'src/app/modules/social/social.module';
import { SocialService } from 'src/app/modules/social/services/social.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 
  
  space: boolean = true;

  constructor(
    
    private sharedDataService : SharedDataService
  ) { }

  ngOnInit(): void {
    
  }

  openModal() {
    this.sharedDataService.setModalState(true);  
  }
  

  



}
