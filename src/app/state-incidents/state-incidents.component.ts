import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, Colors } from 'ng2-charts';

@Component({
  selector: 'app-state-incidents',
  templateUrl: './state-incidents.component.html',
  styleUrls: ['./state-incidents.component.scss']
})
export class StateIncidentsComponent implements OnInit {
  public state;
  public numInc;
  public percentage;

  public doughnutChartLabels: Label[] = [localStorage.getItem('state'), 'US Cases'];
  
  public doughnutChartData: 
  
  MultiDataSet = [
    [Number(localStorage.getItem('numInstance')), Number(localStorage.getItem('totalCases'))]
  ];

  public doughnutChartColors: Colors[] = [
    
    {backgroundColor:["#ffb347","#FF5800","#FFB414"],
    borderColor:["#000000","#000000"]},
    
    //"#9E120E"
  ];
  
  public doughnutChartType: ChartType = 'pie';

  public doughnutChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor() { 
    //this.state = localStorage.getItem('state');
    //this.numInc = localStorage.getItem('numInstance');
   // this.percentage = localStorage.getItem('percentage');
    //this.percentage = (this.percentage).toFixed(5);
   // console.log(this.percentage);
  }

  ngOnInit(): void {
    //call function to retrieve data
    
    this.state = localStorage.getItem('state');
    this.numInc = localStorage.getItem('numInstance');
    var temp = localStorage.getItem('percentage');
    var temp2 = parseFloat(temp);
    this.percentage = (temp2).toFixed(5)
  
    console.log(this.percentage);
    // if (!localStorage.getItem('autoLoad')) { 
    //   localStorage.setItem('autoLoad', 'no reload') 
    //   location.reload() 
    // } else {
    //   localStorage.removeItem('autoLoad') 
    // }
  }

}
