import { Routes } from "@angular/router";


export const appRoutes: Routes = [
  {
    path: 'social',
    loadChildren: () => import('./modules/social/social.module').then(m => m.SocialModule)
  }
]
