import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout/main/layout.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthComponent } from './layout/auth/auth/auth.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ContentComponent,
    SidebarComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ContentComponent
  ]
})
export class CoreModule { }
