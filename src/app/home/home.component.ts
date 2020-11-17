import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataTransferService } from '../datatransfer.service'
//import  *  as  data1  from  '../../../../gundata_part1.json';
//import  *  as  data2  from  '../../../../gundata_part2.json';
//import  *  as  data3  from  '../../../../gundata_part3.json';
//import  *  as  data4  from  '../../../../gundata_part4.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private DataTransferService: DataTransferService) {
   }

  ngOnInit(): void {
    var arr: any[];
    this.DataTransferService.helpMe();
    
    
  }

}
