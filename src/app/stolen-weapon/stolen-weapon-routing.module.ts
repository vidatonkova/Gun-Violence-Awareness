import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"

import { StolenWeaponComponent } from "./stolen-weapon.component"

const routes: Routes = [
      {path: "", component: StolenWeaponComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class StolenWeaponRoutingModule { }
