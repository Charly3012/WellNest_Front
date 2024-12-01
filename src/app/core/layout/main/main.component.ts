import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isStateModalOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

    toggleStateModal(): void {
    this.isStateModalOpen = !this.isStateModalOpen; // Alternar visibilidad
  }

}
