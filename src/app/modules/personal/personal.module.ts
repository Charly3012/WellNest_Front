import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BinnacleComponent } from './pages/binnacle/binnacle.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { BinnaclePostComponent } from './components/binnacle-post/binnacle-post.component';



@NgModule({
  declarations: [
    BinnacleComponent,
    GoalsComponent,
    BinnaclePostComponent,

  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    FormsModule
  ]
})
export class PersonalModule { }
