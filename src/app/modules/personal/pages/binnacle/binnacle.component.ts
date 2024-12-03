import { Component, Input, OnInit } from '@angular/core';
import { Binnacle } from '../../models/Binnacle';
import { PersonalService } from '../../services/personal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-binnacle',
  templateUrl: './binnacle.component.html',
  styleUrls: ['./binnacle.component.scss']
})
export class BinnacleComponent implements OnInit {
  isModalVisible = false;
  content: string = '';

  binnacle: Binnacle[] = [];
  constructor(
    private personalService: PersonalService,
    private router: Router

  ) { }


  ngOnInit(): void {
    this.loadUserBinnacles()
  }

  loadUserBinnacles() {

    this.personalService.getUserBinnacles().subscribe(
      (data) => {
        this.binnacle = data;
        console.log(data)
      }
    )

  }

  submitBinnacle() {
    const newBinnacle: Binnacle = {
      content: this.content,

    };
    this.clearForm();

    this.personalService.inserBinnacle(newBinnacle).subscribe({
      next: (response) => {

        alert('Binnacle Publicada..')

      },
      error: (err) => {
        console.error('Error al crear el post:', err);
      },
    });
  }

  clearForm() {
    this.content = '';
  }

  openModal() {
    this.isModalVisible = true;
    console.log('Modal abierto');
  }

  closeModal() {
    this.isModalVisible = false;
    this.loadUserBinnacles();
  }
}
