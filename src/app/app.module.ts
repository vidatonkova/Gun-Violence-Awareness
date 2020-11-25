import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTransferService } from './datatransfer.service';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import {Chart} from 'chart.js';
import { ChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
    
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
