import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthorModel} from "../../shared/models/author.model";
import {AuthorComponent} from "../../shared/components/author/author.component";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , AfterViewChecked{
@ViewChild('btnCounter') btnCounter: ElementRef;
@ViewChild(AuthorComponent) authComponent: AuthorComponent;

  constructor()
  {
    console.log("hello from parent constructor")
  }

  ngAfterViewChecked() {
    console.log(this.authComponent.Counter2)
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
