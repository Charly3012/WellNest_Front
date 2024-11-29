import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl: String = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllPost(): Observable<Post[]> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/post/GetAllPost`);
  }
}
