import {
  AfterContentChecked,
  AfterContentInit,
  Component, ContentChild,
  DoCheck,
  Input,
  OnChanges,
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
export class AuthorComponent implements OnInit , OnChanges , DoCheck, AfterContentInit, AfterContentChecked{


  // @Output() myData = new EventEmitter<string>();

  // public data:number;
  // public setData(value: number): void{
  //   this.data = value;
  //
  // }


  // ShowAuthors: boolean = true;
  //
  // constructor(private _testService: TestService) {
  // }

  // public btnClick(): void{
  //   // this.myData.emit("This text is from child")
  //   this._testService.mydata= "This text is from child mydata2"
  //
  // }

  constructor() {
    console.log("hello from child constructor")
  }



  @ContentChild(AuthorsAddressComponent) authAddress: AuthorsAddressComponent;
  @Input() data: number ;
  @Input() data2: boolean;
  @Input() author: AuthorModel;


  ngAfterContentChecked() {
    console.log("AfterContentChecked"+  this.authAddress?.address)

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


}
