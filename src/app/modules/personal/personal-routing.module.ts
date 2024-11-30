import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinnacleComponent } from './pages/binnacle/binnacle.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { ProfileComponent } from '../social/pages/profile/profile.component';

const routes: Routes = [
  {
    path: 'binnacle',
    component: BinnacleComponent
  },
  {
    path: 'goals', // Nueva ruta
    component: GoalsComponent, // Componente asociado
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
