import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from './models/creds';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  apiUrl : String = environment.apiUrl;


  constructor(private http: HttpClient) { }

  login(creds: Credentials): Observable<any>{
    return this.http.post(`${this.apiUrl}/auth/login`, creds,{
      observe: 'response'
    })
    .pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      console.log(body);
      localStorage.setItem('token', body.token);
    }))
  }


  getToken(){
    return localStorage.getItem('token');
  }

}
