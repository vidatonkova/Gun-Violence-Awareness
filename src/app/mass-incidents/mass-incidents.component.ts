import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../datatransfer.service'

@Component({
  selector: 'app-mass-incidents',
  templateUrl: './mass-incidents.component.html',
  styleUrls: ['./mass-incidents.component.scss']
})
export class MassIncidentsComponent implements OnInit {

  constructor(private DataTransferService: DataTransferService) { }

  ngOnInit(): void {
    //this.DataTransferService.massShootingHeap();
    //this.DataTransferService.massShootingMap();
    //make get functions later to retrieve data for heap
    
  }

}
