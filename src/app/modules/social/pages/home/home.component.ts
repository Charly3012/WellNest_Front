import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../../models/Post';
import { SocialService } from '../../services/social.service';
import { Page } from '../../models/Page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public message : string = '';
  page!: Page;
  posts!: Post[];


  constructor(
    private socialService: SocialService
  ) { }

  ngOnInit(): void {
    this.loadForYou();
  }

  loadFollow(){

  }

  loadForYou(){
    console.log('cargando para ti');
    this.socialService.getAllPost().subscribe(
      (data) => {
        this.page = data;
        this.posts = data.content;
        console.log(this.posts);
      },
      (error) =>{
        console.log('Algo malio sal', error);
      }
    );
  }

}
