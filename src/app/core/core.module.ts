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



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    MainComponent,
    AuthLayoutComponent,
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
    AuthModule
  ]
})
export class CoreModule { }
