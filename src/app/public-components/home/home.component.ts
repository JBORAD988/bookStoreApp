import {Component, Input, OnInit} from '@angular/core';
import {TestService} from "../../shared/services/test.service";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  // public childData($event: any): void{
  //   console.log($event);
  // }


  constructor(public _testService: TestService) {}

  ngOnInit() {

  }


  @Input() count : number = 0;
  @Input() count2 : boolean = true;
  public counter(): void{
    this.count++;
    this.count2 = !this.count2;
  }

}
