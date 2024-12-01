import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../modules/Profile';
import { SocialService } from '../../services/social.service';


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
  logout(): void {
    console.log('Token antes de eliminar:', localStorage.getItem('token'));
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    console.log('Token después de eliminar:', localStorage.getItem('token'));
    this.router.navigate(['/auth/login']);
  }



}
