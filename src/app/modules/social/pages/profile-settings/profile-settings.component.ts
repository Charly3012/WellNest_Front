import { Component, OnInit } from '@angular/core';
import { SocialService } from '../../services/social.service';
import { Profile } from '../../modules/Profile';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  userName: string = '';
  nickName: string = ''; 
  email: string = '';
  

  constructor(
    private socialService: SocialService
    
  ) { }

  ngOnInit(): void {
    this.loadInfoProfile();
  }

  loadInfoProfile(): void {
    this.socialService.getUserProfile().subscribe({
      next: (profile: Profile) => {
        this.userName = profile.name;
        this.nickName = profile.nickname
        this.email = profile.email
        
        
      },
      error: (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    });
  }


  

}
