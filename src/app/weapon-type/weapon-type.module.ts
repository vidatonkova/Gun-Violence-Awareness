import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeaponTypeRoutingModule } from "./weapon-type-routing.module"
import { WeaponTypeComponent } from "./weapon-type.component"

@NgModule({
  declarations: [WeaponTypeComponent],
  imports: [
    CommonModule,
    WeaponTypeRoutingModule
  ]
})
export class WeaponTypeModule { }
