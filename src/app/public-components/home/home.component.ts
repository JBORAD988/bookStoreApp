import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  public childData($event: any): void{
    console.log($event);
  }


  constructor() {}

  ngOnInit() {

  }

}
