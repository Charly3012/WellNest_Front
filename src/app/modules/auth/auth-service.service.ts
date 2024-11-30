import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from './models/Credentials';
import { RegisterData } from './models/RegisterData';

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
      sessionStorage.setItem('token', body.token);
    }))
  }

  register(registerData: RegisterData): Observable<any>{
    return this.http.post(`${this.apiUrl}/auth/register`, registerData, {
      observe: 'response'
    })
    .pipe(map((reponse: HttpResponse<any>) => {
      const body = reponse.body;

      console.log(body);
      
    }))
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

}
