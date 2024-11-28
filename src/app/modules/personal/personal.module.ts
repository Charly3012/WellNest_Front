import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { BinnacleComponent } from './pages/binnacle/binnacle.component';
import { NotesComponent } from './pages/notes/notes.component';


@NgModule({
  declarations: [
    BinnacleComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
