import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { StateIncidentsComponent } from '../state-incidents/state-incidents.component';

import {  HomeComponent } from "./home.component"


const routes: Routes = [
    { path: "", component: HomeComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class HomeRoutingModule { }
