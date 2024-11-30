import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { PostComponent } from './components/post/post.component';
import { SearchComponent } from './pages/search/search.component';
import { StateComponent } from './pages/state/state.component';


@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    SearchComponent,
    ProfileComponent,
    ProfileSettingsComponent,
    PostComponent,
    StateComponent
  ],
  imports: [
    CommonModule,
    SocialRoutingModule
  ]
})
export class SocialModule { }
