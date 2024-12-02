import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../models/Page';
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

