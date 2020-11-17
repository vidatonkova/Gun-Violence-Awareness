import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataTransferService } from '../datatransfer.service'
//import  *  as  data1  from  '../../../../gundata_part1.json';
//import  *  as  data2  from  '../../../../gundata_part2.json';
//import  *  as  data3  from  '../../../../gundata_part3.json';
//import  *  as  data4  from  '../../../../gundata_part4.json';
//import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //stateName: FormGroup;
  //states: any =['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

  constructor(private DataTransferService: DataTransferService) {
   }

  ngOnInit(): void {
    var arr: any[];
    this.DataTransferService.helpMe();
    
    
  }

 


}
/*this.stateName = this.formBuilder.group({
  selectedState: ['', Validators.required]

   selectState(e){
    this.stateName.setValue(e.target.value, {onlySelf: true})
  }

    get f() { return this.stateName.controls; }

})*/