import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TestService} from "../../shared/services/test.service";
import {AuthorModel} from "../../shared/models/author.model";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , AfterViewInit{
@ViewChild('btnCounter') btnCounter: ElementRef;

  constructor()
  {
    console.log("hello from parent constructor")
  }

  ngAfterViewInit() {
    console.log(this.btnCounter);
    this.btnCounter.nativeElement.innerHTML = " button text Updated";
  }

  ngOnInit() {
    console.log("hello from parent ngOnInit");



  }


  public count : number = 0;
  public count2 : boolean = true;
  public address: string = 'India'
  public obj: AuthorModel = {id:10 , name:'nitish'}




  public counter(): void{
    this.count++;
    this.count2 = !this.count2;
  this.obj.id = this.count++
    this.address = 'Austrlia'
  }

}
