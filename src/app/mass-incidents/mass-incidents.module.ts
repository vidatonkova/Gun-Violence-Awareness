import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts'
import { MassIncidentsRoutingModule } from "./mass-incidents-routing.module"
import { MassIncidentsComponent } from "./mass-incidents.component"


@NgModule({
  declarations: [MassIncidentsComponent],
  imports: [
    CommonModule,
    MassIncidentsRoutingModule,
    ChartsModule
  ]
})
export class MassIncidentsModule { }
