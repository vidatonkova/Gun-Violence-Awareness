import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StolenWeaponRoutingModule } from "./stolen-weapon-routing.module"
import { StolenWeaponComponent } from "./stolen-weapon.component"


@NgModule({
  declarations: [StolenWeaponComponent],
  imports: [
    CommonModule,
    StolenWeaponRoutingModule
  ]
})
export class StolenWeaponModule { }
