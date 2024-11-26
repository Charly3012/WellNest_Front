import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { BinnacleComponent } from './pages/binnacle/binnacle.component';
import { GoalsComponent } from './pages/goals/goals.component';


@NgModule({
  declarations: [
    BinnacleComponent,
    GoalsComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
