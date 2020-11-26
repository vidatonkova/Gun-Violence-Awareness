import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../datatransfer.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-mass-incidents',
  templateUrl: './mass-incidents.component.html',
  styleUrls: ['./mass-incidents.component.scss']
})
export class MassIncidentsComponent implements OnInit {
 
  public doughnutChartLabels: Label[] = ['Is', 'Not'];
  public doughnutChartData: 
  MultiDataSet = [
    [Number(localStorage.getItem('isMass')), Number(localStorage.getItem('notMass'))]
    
  ]
  backgroundColor = ["rgba(0,0,0,0.2)","rgba(255,99,132,0.2)"]
  ;

  
  public doughnutChartType: ChartType = 'doughnut';
 // public doughnutChartcolor: ["rgba(0,0,0,0.2)","rgba(255,99,132,0.2)"];
  
  public doughnutChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false,
  };


  constructor(private DataTransferService: DataTransferService) {
    var is = this.DataTransferService.isMass;
    var not = this.DataTransferService.notMass
   console.log(Number(localStorage.getItem("isMass")))
   
  }

  ngOnInit(): void {
    var is = this.DataTransferService.isMass;
    var not = this.DataTransferService.notMass
   console.log(is)
    
  }

}
