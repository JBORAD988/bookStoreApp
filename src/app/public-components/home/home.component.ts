import {Component, OnInit} from '@angular/core';
import {TestService} from "../../shared/services/test.service";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  public childData($event: any): void{
    console.log($event);
  }


  constructor(public _testService: TestService) {}

  ngOnInit() {

  }

}
