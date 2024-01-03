import {
  AfterContentChecked,
  AfterContentInit,
  Component, ContentChild,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {AuthorModel} from "../../models/author.model";
import {AuthorsAddressComponent} from "../authors-address/authors-address.component";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit , OnChanges , DoCheck, AfterContentInit, AfterContentChecked, OnDestroy{
  constructor() {
    console.log("hello from child constructor")
  }



  @ContentChild(AuthorsAddressComponent) authAddress: AuthorsAddressComponent;
  @Input() data: number ;
  @Input() data2: boolean;
  @Input() author: AuthorModel;

    public Counter2: number= 0;



  ngAfterContentChecked() {
    console.log("AfterContentChecked" + this.authAddress?.address);
  }

  ngOnDestroy() {
    console.log("authors component Destroy")
  }



  ngAfterContentInit() {
    console.log("AfterContentInit"+ this.authAddress?.address)
  }


  ngDoCheck() {
    console.log(this.author)
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }




  ngOnInit() {
    console.log("hello from child ngOn init")
  }


  incCounter(): void{
    this.Counter2++
  }


}
