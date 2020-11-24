import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../datatransfer.service'

//import  *  as  data10  from  '../../../../gundata_part10.json';
//import  *  as  data5  from  '../../../../gundata_part5.json';

@Component({
  selector: 'app-weapon-type',
  templateUrl: './weapon-type.component.html',
  styleUrls: ['./weapon-type.component.scss']
})
export class WeaponTypeComponent implements OnInit {
  //data transfer service just kinda goes into construcutor
  constructor(private DataTransferService: DataTransferService) { }
  //main of the component
  ngOnInit(): void {
   var bb = this.DataTransferService.set_of_guns;
   console.log(bb);
  }

}
