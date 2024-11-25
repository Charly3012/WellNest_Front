import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/layout/main/main.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { AuthNotLoginGuard } from './core/guards/auth-not-login.guard';
import { AuthYesLoginGuard } from './core/guards/auth-yes-login.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthNotLoginGuard],
    children: [
      {
        path: 'social',
        loadChildren: () => import('./modules/social/social.module').then(m => m.SocialModule),
      },
      {
        path: 'personal',
        loadChildren: () => import('./modules/personal/personal.module').then(m => m.PersonalModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [AuthYesLoginGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
