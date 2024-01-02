import {Component, Input, OnInit} from '@angular/core';
import {TestService} from "../../shared/services/test.service";
import {AuthorModel} from "../../shared/models/author.model";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  constructor()
  {
    console.log("hello from parent constructor")
  }

  ngOnInit() {
    console.log("hello from parent ngOnInit")

  }


  @Input() count : number = 0;
  @Input() count2 : boolean = true;

  public obj: AuthorModel = {id:10 , name:'nitish'}



  public counter(): void{
    this.count++;
    this.count2 = !this.count2;
  this.obj.id = this.count++
  }

}
