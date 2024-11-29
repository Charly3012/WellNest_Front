import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialService } from '../../services/social.service';
import { Profile } from '../../modules/Profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  nickName: string = ''; 

  constructor(
    private socialService: SocialService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadNameProfile();
  }

  loadNameProfile(): void {
    this.socialService.getUserProfile().subscribe({
      next: (profile: Profile) => {
        this.nickName = profile.nickname;
        
      },
      error: (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    });
  }

  navigateToProfileSettings() {
    this.router.navigate(['/social/profileSettings']);
  }
}
