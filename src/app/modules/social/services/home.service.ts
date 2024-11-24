import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'http://localhost:8080/api/v1/demo/holaMundo';

  constructor(private http: HttpClient) { }

  getHolaMundo(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
