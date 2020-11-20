import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren : () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: "home",
    loadChildren : () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:"state-incidents",
    loadChildren : () => import('./state-incidents/state-incidents.module').then(m => m.StateIncidentsModule)
  },
  {
    path:"mass-incidents",
    loadChildren : () => import('./mass-incidents/mass-incidents.module').then(m => m.MassIncidentsModule)
  },
  {
    path:"weapon-type",
    loadChildren : () => import('./weapon-type/weapon-type.module').then(m => m.WeaponTypeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
