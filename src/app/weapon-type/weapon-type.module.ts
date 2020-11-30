import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts'

import { WeaponTypeRoutingModule } from "./weapon-type-routing.module"
import { WeaponTypeComponent } from "./weapon-type.component"

@NgModule({
  declarations: [WeaponTypeComponent],
  imports: [
    CommonModule,
    WeaponTypeRoutingModule,
    ChartsModule
  ]
})
export class WeaponTypeModule {
  
 }
