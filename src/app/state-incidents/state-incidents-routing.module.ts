import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"

import { StateIncidentsComponent } from "./state-incidents.component"

const routes: Routes = [
  { path: "", component: StateIncidentsComponent},

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class StateIncidentsRoutingModule { }
