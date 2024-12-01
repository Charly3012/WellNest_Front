import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '../modules/auth/auth.module';
import { StateComponent } from '../modules/social/pages/state/state.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    MainComponent,
    AuthLayoutComponent,
    StateComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MainComponent,
    AuthLayoutComponent,
    AuthModule,
    StateComponent
    
  ]
})
export class CoreModule { }
