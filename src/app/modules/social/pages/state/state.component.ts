import { Component, OnInit } from '@angular/core';
import { SocialService } from '../../services/social.service';
import { Post } from '../../models/Post';
import { SharedDataService } from 'src/app/core/services/shared-data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
 
  postContent: string= ''
  mood:  string= ''
  isModalVisible = false;

  constructor(
    private router: Router,
    private sharedDataService: SharedDataService,
    private social:SocialService) { }

  ngOnInit(): void {
    this.sharedDataService.modalState$.subscribe((state) => {
      this.isModalVisible = state;
    });
  }


  submitPost() {
    const newPost: Post = {
      postContent: this.postContent,
      mood: this.mood
     
    };
    this.clearForm();

    this.social.insertPost(newPost).subscribe({
      next: (response) => {
      
       alert('Post Publicado..')
       
        
      },
      error: (err) => {
        console.error('Error al crear el post:', err);
       
      },
    });
  }

    

  closeModal() {
    this.sharedDataService.setModalState(false); 
    this.router.navigate(['/social/home']);
  }


  clearForm() {
    this.postContent = '';
    this.mood = '';
  }
 

}
