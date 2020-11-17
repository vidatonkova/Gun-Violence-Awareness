import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

//import  *  as  data6  from  '../../../gundata_part6.json';
//import  *  as  data7  from  '../../../gundata_part7.json';
//import  *  as  data8  from  '../../../gundata_part8.json';
//import  *  as  data9  from  '../../../gundata_part9.json';
@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private httpClient: HttpClient) { }

  helpMe(){
    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      console.log(data1);
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data2 =>{
      console.log(data2);
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data3 =>{
      console.log(data3);
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data =>{
      console.log(data);
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data =>{
      console.log(data);
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data =>{
      console.log(data);
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data =>{
      console.log(data);
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data =>{
      console.log(data);
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data =>{
      console.log(data);
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data =>{
      console.log(data);
    })
  }
}
