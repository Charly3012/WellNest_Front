import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './components/post/post.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SocialRoutingModule
  ]
})
export class SocialModule { }
