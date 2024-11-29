import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { SocialService } from '../../services/social.service';


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
    private SocialService: SocialService
  ) { }

  ngOnInit(): void {
    this.loadAllPost();
  }

  loadAllPost(): void {
    this.SocialService.getAllPost().subscribe(
      (data) => {
        this.post = data.content;
        console.log(data)
      }
    )
  }

}

