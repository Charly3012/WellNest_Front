import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BinnacleComponent } from './pages/binnacle/binnacle.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { PersonalRoutingModule } from './personal-routing.module';


@NgModule({
  declarations: [
    BinnacleComponent,
    GoalsComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    FormsModule
  ]
})
export class PersonalModule { }
