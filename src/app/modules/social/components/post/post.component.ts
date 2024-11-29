import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'state-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() name: string = ' ';
  @Input() nickname: string = ' ';
  @Input() content: string = ' ';
  @Input() mood: string = ' ';

  post: Post[] = [];


  constructor(
    private PostService: PostService
  ) { }

  ngOnInit(): void {
  }

  loadAllPost(): void {
    this.PostService.getAllPost().subscribe(
      (data) => {
        this.post = data;
        console.log('post', this.post)
      },
      (error) => {
        console.log('Error en la peticion', error)
      }
    )
  }

}

