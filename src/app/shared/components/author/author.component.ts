import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit , OnChanges{


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
  }


  @Input() data: number ;
  @Input() data2: boolean;


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }




  ngOnInit() {
  }


}
