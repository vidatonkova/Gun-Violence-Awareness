import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-incidents',
  templateUrl: './state-incidents.component.html',
  styleUrls: ['./state-incidents.component.scss']
})
export class StateIncidentsComponent implements OnInit {
  public state;
  public numInc;
  public percentage;
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
