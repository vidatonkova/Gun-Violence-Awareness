import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateIncidentsRoutingModule } from "./state-incidents-routing.module"
import { StateIncidentsComponent } from "./state-incidents.component"

@NgModule({
  declarations: [StateIncidentsComponent],
  imports: [
    CommonModule,
    StateIncidentsRoutingModule
  ]
})
export class StateIncidentsModule { }
