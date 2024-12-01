import { Component, OnInit } from '@angular/core';
import { SocialService } from '../../services/social.service';
import { Profile } from '../../models/Profile';
import { ModifyProfile } from '../../models/ModifyProfile';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  email: string = '';

  profileData: ModifyProfile = {
    name: '',
    nickname: '',
    password: '',
    newPassword: ''
  };


  constructor(
    private socialService: SocialService

  ) { }

  ngOnInit(): void {
    this.loadInfoProfile();

  }

  loadInfoProfile(): void {
    this.socialService.getUserProfile().subscribe({
      next: (profile: Profile) => {
        this.profileData.name = profile.name;
        this.profileData.nickname = profile.nickname;
        this.email = profile.email;


      },
      error: (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    });
  }

  modifyProfile() {
    this.socialService.updateProfile(this.profileData).subscribe({
      next: (response) => {
        alert('Los datos han sido actualizados')
      },
      error: (error) => {
        alert('Error al actualizar datos del perfil: ' + error.error.Error);
      }
    });
  }



}
