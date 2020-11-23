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

  printValsMap(hash ,x){
    var notMass = hash.get("false");
    var mass = hash.get("true");
    
    console.log(notMass);
    console.log(mass);
    var y = performance.now();
      var z = y-x;
      var a = z.toString();
      console.log(a);
      localStorage.setItem('maptime', a);
  }

  massShootingMap(){
    var d = new Date();
    var x = performance.now();
    var isMass = 0;
    var notMass = 0;
    var HashMap = require('hashmap');
    var hash = new HashMap();
    hash.set("true", 0);
    hash.set("false", 0);
    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9225; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9225; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9200; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9163; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9132; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9132; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9253; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9384; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9360; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data1 =>{
      console.log("fdkaslf");
      for(let i = 0; i < 9769; i++){ 
        if(data1[i].n_killed != undefined){

        if(data1[i].n_killed > 2){
          var currVal = hash.get("true");
          hash.delete("true");
          currVal = currVal + 1;
          hash.set("true", currVal);
        }else if(data1[i].n_killed > -1 && data1[i].n_killed < 3){
          var currVal = hash.get("false");
          hash.delete("false");
          currVal = currVal + 1;
          hash.set("false", currVal);
        }
      }
    }
    this.printValsMap(hash, x);
    })
   
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

  printValsWeapHeap(heap ,x){
      console.log(heap.peek());
      heap.pop();
      //go through and look for top three values and store in array as discussed previously
      var y = performance.now();
      var z = y-x;
      var a = z.toString();
      console.log(a);
      localStorage.setItem('heaptime', a);
  }

  weapTypeHeap(){
    var d = new Date();
    var x = performance.now();
    var Heap = require('heap');
    var heap = new Heap();
    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      for(let i = 0; i < 9225; i++){ 
        if(data1[i].gun_type != undefined){
          heap.push(data1[i].gun_type);
        }
    }
      
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data2 =>{
      //console.log(data2); //9164
      for(let i = 0; i < 9225; i++){ 
          if(data2[i].gun_type != undefined){
            heap.push(data2[i].gun_type);
          }
    }
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data3 =>{
      //console.log(data3); //9200
      for(let i = 0; i < 9200; i++){ 
          if(data3[i].gun_type != undefined){
            heap.push(data3[i].gun_type);
          }
    }
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data4 =>{
      for(let i = 0; i < 9163; i++){ 
          if(data4[i].gun_type != undefined){
            heap.push(data4[i].gun_type);
          }
      }
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data5 =>{
      for(let i = 0; i < 9132; i++){ 
          if(data5[i].gun_type != undefined){
            heap.push(data5[i].gun_type);
          }
      }
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data6 =>{
      //console.log(data6);
      for(let i = 0; i < 9132; i++){ 
          if(data6[i].gun_type != undefined){
            heap.push(data6[i].gun_type);
          }
    }
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data7 =>{
      for(let i = 0; i < 9253; i++){ 
          if(data7[i].gun_type != undefined){
            heap.push(data7[i].gun_type);
          }
      }
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data8 =>{
      for(let i = 0; i < 9384; i++){ 
          if(data8[i].gun_type != undefined){
            heap.push(data8[i].gun_type);
          }
      }
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data9 =>{
      for(let i = 0; i < 9360; i++){ 
          if(data9[i].gun_type != undefined){
            heap.push(data9[i].gun_type);
          }
      }
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data10 =>{
      for(let i = 0; i < 9769; i++){ 
          if(data10[i].gun_type != undefined){
            heap.push(data10[i].gun_type);
          }
      }
      
      this.printValsWeapHeap(heap, x);
    })
  }

  stateHeap(){
    var d = new Date();
    var x = performance.now();
    var Heap = require('heap');
    var heap = new Heap();
    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      for(let i = 0; i < 9225; i++){ 
        if(data1[i].state != undefined){
          heap.push(data1[i].state);
        }
    }
      
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data2 =>{
      //console.log(data2); //9164
      for(let i = 0; i < 9225; i++){ 
          if(data2[i].state != undefined){
            heap.push(data2[i].state);
          }
    }
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data3 =>{
      //console.log(data3); //9200
      for(let i = 0; i < 9200; i++){ 
          if(data3[i].state != undefined){
            heap.push(data3[i].state);
          }
    }
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data4 =>{
      for(let i = 0; i < 9163; i++){ 
          if(data4[i].state != undefined){
            heap.push(data4[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data5 =>{
      for(let i = 0; i < 9132; i++){ 
          if(data5[i].state != undefined){
            heap.push(data5[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data6 =>{
      //console.log(data6);
      for(let i = 0; i < 9132; i++){ 
          if(data6[i].state != undefined){
            heap.push(data6[i].state);
          }
    }
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data7 =>{
      for(let i = 0; i < 9253; i++){ 
          if(data7[i].state != undefined){
            heap.push(data7[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data8 =>{
      for(let i = 0; i < 9384; i++){ 
          if(data8[i].state != undefined){
            heap.push(data8[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data9 =>{
      for(let i = 0; i < 9360; i++){ 
          if(data9[i].state != undefined){
            heap.push(data9[i].state);
          }
      }
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data10 =>{
      for(let i = 0; i < 9769; i++){ 
          if(data10[i].state != undefined){
            heap.push(data10[i].state);
          }
      }
      
      this.printValsStateHeap(heap, x);
    })
  }

  printStateMap(hash ,x){
    var stateToFind = localStorage.getItem("state");
    var numIns = hash.get(stateToFind);
    console.log(numIns);
    
    var y = performance.now();
      var z = y-x;
      var a = z.toString();
      console.log(a);
      localStorage.setItem('maptime', a);
  }

  stateMap(){
    //var d = new Date();
    var x = performance.now();
    var HashMap = require('hashmap');
    var hash = new HashMap();

    this.httpClient.get("assets/gundata_part1.json").subscribe(data1 =>{
      for(let i = 0; i < 9225; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part2.json").subscribe(data1 =>{
      for(let i = 0; i < 9225; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part3.json").subscribe(data1 =>{
      for(let i = 0; i < 9200; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part4.json").subscribe(data1 =>{
      for(let i = 0; i < 9163; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part5.json").subscribe(data1 =>{
      for(let i = 0; i < 9132; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part6.json").subscribe(data1 =>{
      for(let i = 0; i < 9132; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part7.json").subscribe(data1 =>{
      for(let i = 0; i < 9253; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part8.json").subscribe(data1 =>{
      for(let i = 0; i < 9384; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part9.json").subscribe(data1 =>{
      for(let i = 0; i < 9360; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
    })
    this.httpClient.get("assets/gundata_part10.json").subscribe(data1 =>{
      for(let i = 0; i < 9769; i++){ 
        //data1[i].state
        if(hash.has(data1[i].state)){
          var currVal = hash.get(data1[i].state);
          hash.delete(data1[i].state);
          currVal = currVal + 1;
          hash.set(data1[i].state, currVal);
        }else{
          hash.set(data1[i].state, 1);
        }
      }
      //console.log(hash.get("Oklahoma"));
      this.printStateMap(hash, x);
    })

  }

  printValsStateHeap(heap, x){
    var stateFound = false;
    var totalCases = 0;
    var numInstances = 0;
    var stateToFind = localStorage.getItem("state");
    while(heap.size() > 0){
      if(heap.top() == stateToFind){
        numInstances++;
      }
      heap.pop();
      totalCases++;
    }
    localStorage.setItem("numInstance", numInstances.toString());
    var percentageOfInc = (numInstances / totalCases) * 100;
    localStorage.setItem("percentage", percentageOfInc.toString());

  }
}
