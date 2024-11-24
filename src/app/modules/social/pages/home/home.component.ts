import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public message : string = '';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    //trying hola mundo get
    this.homeService.getHolaMundo().subscribe(
      (response) =>{
        this.message = response.message;
      },
      (error) => {
        console.error('Error al obtener el mensaje', error)
      }
    );

  }

}
