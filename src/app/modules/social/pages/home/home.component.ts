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
  postSpace : boolean = true;


  constructor(
    private socialService: SocialService
  ) { }

  ngOnInit(): void {
    this.loadForYou();
  }

  loadFollow(){
    this.postSpace = false;
    this.page = {} as Page;
    this.posts = [];

  }

  loadForYou(){
    this.socialService.getAllPost().subscribe(
      (data) => {
        this.page = data;
        this.posts = data.content;
        this.postSpace = true;
      },
      (error) =>{
        console.log('Algo malio sal', error);
      }
    );
  }

}
