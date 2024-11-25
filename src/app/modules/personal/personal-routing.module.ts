import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinnacleComponent } from './pages/binnacle/binnacle.component';
import { ProfileComponent } from '../social/pages/profile/profile.component';

const routes: Routes = [
  {
    path: 'binnacle',
    component: BinnacleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
