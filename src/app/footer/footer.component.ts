import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public heaptime;
  constructor() {
    this.heaptime = localStorage.getItem('heaptime');
   }

  ngOnInit(): void {
    var heaptime = localStorage.getItem('heaptime');
    console.log(heaptime)
  }

}
