import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  private space = new BehaviorSubject<boolean>(true);
  currentSpace$ = this.space.asObservable();

  private modalStateSubject = new BehaviorSubject<boolean>(false);
  modalState$ = this.modalStateSubject.asObservable();

  changeSpace(newValue: boolean) {
    this.space.next(newValue);
  }

  setModalState(isOpen: boolean) {
    this.modalStateSubject.next(isOpen);  
  }
}
