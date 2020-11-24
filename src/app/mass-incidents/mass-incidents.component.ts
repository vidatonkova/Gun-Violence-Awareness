import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../datatransfer.service';
import {Chart} from 'chart.js';



@Component({
  selector: 'app-mass-incidents',
  templateUrl: './mass-incidents.component.html',
  styleUrls: ['./mass-incidents.component.scss']
})
export class MassIncidentsComponent implements OnInit {
  barGraphData: { data: any[]; }[];
  barGraphLabels: string[];
  chartOptions: {
  responsive: boolean; scales: { yAxes: { ticks: { steps: number; stepValue: number; max: number; min: number; }; }[]; }; // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  };


  constructor(private DataTransferService: DataTransferService) {
    var is = this.DataTransferService.is_Mass;
    var not = this.DataTransferService.not_Mass;
   console.log(is);
   console.log(not);
   
    this.barGraphData = [
    { 
        data: [is, not]
    }
];
this.barGraphLabels =  ['Is Mass', 'Is Not Mass'];

this.chartOptions = {
  responsive: true, 
  scales : {
    yAxes: [{
       ticks: {
          steps : 10,
          stepValue : 1,
          max : 7,
          min: 0
        }
    }]
  }   // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
}

}

  ngOnInit(): void {
    //this.DataTransferService.massShootingHeap();
    //this.DataTransferService.massShootingMap();
    //make get functions later to retrieve data for heap

  var ctx = document.getElementById('myChart');
  
  }

}
