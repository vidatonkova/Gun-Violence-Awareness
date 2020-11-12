import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateIncidentsRoutingModule } from "./state-incidents-routing.module"
import { StateIncidentsComponent } from "./state-incidents.component"
import { FooterComponent } from "src/app/footer/footer.component"

@NgModule({
  declarations: [StateIncidentsComponent, FooterComponent],
  imports: [
    CommonModule,
    StateIncidentsRoutingModule
  ]
})
export class StateIncidentsModule { }

