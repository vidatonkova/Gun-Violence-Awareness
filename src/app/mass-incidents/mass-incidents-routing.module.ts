import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"

import { MassIncidentsComponent } from "./mass-incidents.component"

const routes: Routes = [
      {path: "", component: MassIncidentsComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class MassIncidentsRoutingModule { }
