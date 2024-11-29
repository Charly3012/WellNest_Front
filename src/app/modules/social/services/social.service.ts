import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../models/Page';




@Injectable({
  providedIn: 'root'
})
export class SocialService {
  apiUrl: String = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllPost(): Observable<Page> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/post/GetAllPost`);
  }
}
