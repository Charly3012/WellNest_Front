import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public apiUrl : string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHolaMundo(): Observable<any>{
    return this.http.get<any>(this.apiUrl + "/api/v1/demo/holaMundo");
  }

}
