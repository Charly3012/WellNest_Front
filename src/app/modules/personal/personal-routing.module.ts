import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinnacleComponent } from './pages/binnacle/binnacle.component';
import { NotesComponent } from './pages/notes/notes.component';

const routes: Routes = [
  {
    path: 'binnacle',
    component: BinnacleComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
