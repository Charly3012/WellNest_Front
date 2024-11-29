import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  private space = new BehaviorSubject<boolean>(true);
  currentSpace$ = this.space.asObservable();

  changeSpace(newValue: boolean) {
    this.space.next(newValue);
  }
}
