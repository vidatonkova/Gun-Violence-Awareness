import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../datatransfer.service'
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, Colors } from 'ng2-charts';
import Chart from 'chart.js';
//import  *  as  data10  from  '../../../../gundata_part10.json';
//import  *  as  data5  from  '../../../../gundata_part5.json';

@Component({
  selector: 'app-weapon-type',
  templateUrl: './weapon-type.component.html',
  styleUrls: ['./weapon-type.component.scss']
})
export class WeaponTypeComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  
  public doughnutChartData = [];
  public doughnutChartColors: Colors[] = [
    
    {backgroundColor:["#FF5800", "#FF7c05","#FFB414","#FFd0a5","#ffe5cd"],
      borderColor:["#000000","#000000","#000000","#000000","#000000" ]
    }
  
  ];
  public doughnutChartType: ChartType = 'pie';
  public doughnutChartOptions: {
    legend: {
       display: false
    },
    tooltips: {
       enabled: false
    }
};

  //data transfer service just kinda goes into construcutor
  constructor(private DataTransferService: DataTransferService) {
   var bb = this.DataTransferService.setOfGuns;
   for(let i = 1; i < 5; i++){
    this.doughnutChartLabels.push(i.toString());
    var data = bb[i][1];
    this.doughnutChartData.push(data);
  
    }
    var l = "5+";
    this.doughnutChartLabels.push(l);
    var c = 0;
    for(let i = 5; i < 31; i++){
      c += bb[i][1];
      
      }
      this.doughnutChartData.push(c);
    console.log(this.doughnutChartData);

   }
  //main of the component
  ngOnInit(): void {
   var bb = this.DataTransferService.setOfGuns;
  }

}
