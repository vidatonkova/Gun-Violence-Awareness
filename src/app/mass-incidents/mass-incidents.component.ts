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
  public percent;
  public doughnutChartLabels: Label[] = ['Is', 'Not'];
  public doughnutChartData: 
  MultiDataSet = [
    [Number(localStorage.getItem('isMass')), Number(localStorage.getItem('notMass'))]
    
  ]
  
  public doughnutChartColors: Color[] = [
    {backgroundColor:["#FF5800","#ffb347","#FFB414"],
    borderColor:["#000000","#000000"]
   
    }
  ];

  
  public doughnutChartType: ChartType = 'doughnut';
  
  public doughnutChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false,
  };
  perc: string;


  constructor(private DataTransferService: DataTransferService) {
    var is = this.DataTransferService.isMass;
    var not = this.DataTransferService.notMass
  
   console.log(Number(localStorage.getItem("isMass")))
   
  }

  ngOnInit(): void {
    var is = this.DataTransferService.isMass;
    var not = this.DataTransferService.notMass;
    var temp = localStorage.getItem("massPerc")
    var temp2 = parseFloat(temp);
    this.perc = (temp2).toFixed(5);
   console.log(is)
  
  }

}
