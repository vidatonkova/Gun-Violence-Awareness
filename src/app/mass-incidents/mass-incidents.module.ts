import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MassIncidentsRoutingModule } from "./mass-incidents-routing.module"
import { MassIncidentsComponent } from "./mass-incidents.component"


@NgModule({
  declarations: [MassIncidentsComponent],
  imports: [
    CommonModule,
    MassIncidentsRoutingModule
  ]
})
export class MassIncidentsModule { }
