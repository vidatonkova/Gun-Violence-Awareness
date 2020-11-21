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
  constructor(private httpClient: HttpClient) { 
  }

  

  printVals(heap ,x){
    var notMass = 0;
    var mass = 0;
    while(heap.top() == 0){
      notMass++;
      heap.pop();
    }
    while(heap.top() == 1){
      mass++;
      heap.pop();
    }
    console.log(notMass);
    console.log(mass);
    var y = performance.now();
      var z = y-x;
      var a = z.toString();
      console.log(a);
      localStorage.setItem('heaptime', a);
  }

  massShootingHeap(){
    var d = new Date();
    var x = performance.now();
    var Heap = require('heap');
    var heap = new Heap();
    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9225; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          heap.push(1);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          heap.push(0);
        }
      }
    }
      
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data2 =>{
      //console.log(data2); //9164
      for(let i = 0; i < 9225; i++){ 
        if(data2[i].n_killed != undefined){

        if(data2[i].n_killed > 2){
          heap.push(1);
        }else if(data2[i].n_killed > -1 && data2[i].n_killed < 3){
          heap.push(0);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data3 =>{
      //console.log(data3); //9200
      for(let i = 0; i < 9200; i++){ 
        if(data3[i].n_killed != undefined){
        if(data3[i].n_killed > 2){
          heap.push(1);
        }else if(data3[i].n_killed > -1 && data3[i].n_killed < 3){
          heap.push(0);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data4 =>{
      for(let i = 0; i < 9163; i++){ 
        if(data4[i].n_killed != undefined){

        if(data4[i].n_killed > 2){
          heap.push(1);
        }else if(data4[i].n_killed > -1 && data4[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data5 =>{
      for(let i = 0; i < 9132; i++){ 
        if(data5[i].n_killed != undefined){

        if(data5[i].n_killed > 2){
          heap.push(1);
        }else if(data5[i].n_killed > -1 && data5[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data6 =>{
      //console.log(data6);
      for(let i = 0; i < 9132; i++){ 
        if(data6[i].n_killed != undefined){
        if(data6[i].n_killed > 2){
          heap.push(1);
        }else if(data6[i].n_killed > -1 && data6[i].n_killed < 3){
          heap.push(0);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data7 =>{
      for(let i = 0; i < 9253; i++){ 
        if(data7[i].n_killed != undefined){
        if(data7[i].n_killed > 2){
          heap.push(1);
        }else if(data7[i].n_killed > -1 && data7[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data8 =>{
      for(let i = 0; i < 9384; i++){ 
        if(data8[i].n_killed != undefined){
        if(data8[i].n_killed > 2){
          heap.push(1);
        }else if(data8[i].n_killed > -1 && data8[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data9 =>{
      for(let i = 0; i < 9360; i++){ 
        if(data9[i].n_killed != undefined){

        if(data9[i].n_killed > 2){
          heap.push(1);
        }else if(data9[i].n_killed > -1 && data9[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data10 =>{
      for(let i = 0; i < 9769; i++){ 
        if(data10[i].n_killed != undefined){
        if(data10[i].n_killed > 2){
          heap.push(1);
        }else if(data10[i].n_killed > -1 && data10[i].n_killed < 3){
          heap.push(0);
        }
      }
      }
      
      this.printVals(heap, x);
    })
  }
}
