import { Component, Input, OnInit } from '@angular/core';
import { Binnacle } from '../../models/Binnacle';
import { PersonalService } from '../../services/personal.service';
import { BinnacleComponent } from '../../pages/binnacle/binnacle.component';

@Component({
  selector: 'app-binnacle-post',
  templateUrl: './binnacle-post.component.html',
  styleUrls: ['./binnacle-post.component.scss']
})
export class BinnaclePostComponent implements OnInit {
  @Input() dataBinnacle!: Binnacle;
  binnacles: Binnacle[] = [];

  constructor(
    private personalService: PersonalService,
    private binnacleComponent: BinnacleComponent
  ) { }

  ngOnInit(): void {
  }
  deleteBinnacle(id: number | undefined): void {
    if (id === undefined) {
      return;
    }
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar esta bitácora?');
    if (!confirmDelete) return;
    this.personalService.deleteBinnacle(id).subscribe({
      next: () => {
        this.binnacleComponent.loadUserBinnacles();
      },
      error: (err) => {
        console.error('Error al eliminar la bitácora:', err);
      }
    });
  }
}
