import { Component, OnInit } from '@angular/core';
import { SocialService } from '../../services/social.service';
import { Post } from '../../models/Post';



@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
 
  postContent: string= ''
  mood:  string= ''
 

  constructor(private social:SocialService) { }

  ngOnInit(): void {
  }


  submitPost() {
    const newPost: Post = {
      postContent: this.postContent,
      mood: this.mood
     
    };

    this.social.insertPost(newPost).subscribe({
      next: (response) => {
       
        
      },
      error: (err) => {
        console.error('Error al crear el post:', err);
       
      },
    });
  }


  ejemlo(){
    console.log('hola ')
    console.log(this.postContent,this.mood)
  }

}
