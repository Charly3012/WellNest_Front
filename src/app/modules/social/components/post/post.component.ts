import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
