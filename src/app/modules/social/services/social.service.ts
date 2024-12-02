import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../models/Page';
import { Post } from '../models/Post';
import { FollowProfile, Profile } from '../models/Profile';
import { ModifyProfile } from '../models/ModifyProfile';




@Injectable({
  providedIn: 'root'
})
export class SocialService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getUserProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/api/v1/user/getProfile`);
  }

  getAllPost(): Observable<Page> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/post/GetAllPost`);
  }

  insertPost(post: Post): Observable<Post> {

    return this.http.post<Post>(`${this.apiUrl}/api/v1/post/InsertPost`, post);
  }

  getUserPost(): Observable<Page> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/post/GetUserPost`);
  }

  updateProfile(modifyProfile: ModifyProfile): Observable<any> {
    return this.http.put<ModifyProfile>(`${this.apiUrl}/api/v1/user/modifyProfile`, modifyProfile);
  }

  addFollower(idNewFollow: number): Observable<any> {
    return this.http.post<void>(`${this.apiUrl}/api/v1/user/follow/${idNewFollow}`, {})
  }
}


