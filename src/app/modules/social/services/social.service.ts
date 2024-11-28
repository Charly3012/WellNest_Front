import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Profile } from '../modules/Profile';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  
  getUserProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/api/v1/user/getProfile`);
  }
}

