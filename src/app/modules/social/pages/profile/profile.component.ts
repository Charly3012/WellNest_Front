import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialService } from '../../services/social.service';
import { FollowProfile, Profile } from '../../models/Profile';
import { Page } from '../../models/Page';
import { Post } from '../../models/Post';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  public message: string = '';
  page!: Page;
  posts!: Post[];
  postSpace: boolean = true;
  profile: Profile = {} as Profile;
  followers!: FollowProfile;
  following!: FollowProfile;


  constructor(
    private socialService: SocialService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadNameProfile();
    this.loadPostPersonal();

  }

  loadNameProfile(): void {
    this.socialService.getUserProfile().subscribe({
      next: (profile: Profile) => {
        this.profile = profile;

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




  loadPostPersonal() {
    this.socialService.getUserPost().subscribe(
      (data) => {
        this.page = data;
        this.posts = data.content;
        this.postSpace = true;
      },
      (error) => {
        console.log('Algo malio sal', error);
      }
    );
  }

  /*addFollowers(idNewFollow: number) {
    this.socialService.addFollower(idNewFollow).subscribe(
      (data) => {
        this.followers = data.idUser;
      }
    )
  }*/

}


