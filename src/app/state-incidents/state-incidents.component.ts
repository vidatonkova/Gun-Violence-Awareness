import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-state-incidents',
  templateUrl: './state-incidents.component.html',
  styleUrls: ['./state-incidents.component.scss']
})
export class StateIncidentsComponent implements OnInit {
  public state;
  public numInc;
  public percentage;

  public doughnutChartLabels: Label[] = [localStorage.getItem('state'), 'Not'];
  public doughnutChartData: MultiDataSet = [
    [Number(localStorage.getItem('numInstance')), Number(localStorage.getItem('totalCases'))]
  ];
  public doughnutChartType: ChartType = 'pie';

  constructor() { 
    //this.state = localStorage.getItem('state');
    //this.numInc = localStorage.getItem('numInstance');
    //this.percentage = localStorage.getItem('percentage');
  }

  ngOnInit(): void {
    //call function to retrieve data
    
    this.state = localStorage.getItem('state');
    this.numInc = localStorage.getItem('numInstance');
    this.percentage = localStorage.getItem('percentage');
    // if (!localStorage.getItem('autoLoad')) { 
    //   localStorage.setItem('autoLoad', 'no reload') 
    //   location.reload() 
    // } else {
    //   localStorage.removeItem('autoLoad') 
    // }
  }

}
