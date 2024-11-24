import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from './models/creds';

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

      //const baererToken = body.get('token');
      console.log(body);
      localStorage.setItem('token', body.token);
      return body;

    }))
  }

  register(data: {
    name: string;
    email: string;
    nickname: string;
    bornDate: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }

}
