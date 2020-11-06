import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeaponTypeComponent } from "./weapon-type.component"

const routes: Routes = [
      {path: "", component: WeaponTypeComponent},
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class WeaponTypeRoutingModule { }
