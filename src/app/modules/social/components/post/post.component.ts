import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { SocialService } from '../../services/social.service';


@Component({
  selector: 'state-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() data! : Post;

  constructor() { }

  ngOnInit(): void {
  }


}

