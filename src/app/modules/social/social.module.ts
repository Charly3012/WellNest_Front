import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { SocialRoutingModule } from './social-routing.module';
import { StateComponent } from './pages/state/state.component';

import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { AppModule } from 'src/app/app.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    SearchComponent,
    ProfileComponent,
    ProfileSettingsComponent,
    PostComponent,
    StateComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    SocialRoutingModule,
    FormsModule
  ]
})
export class SocialModule { }
