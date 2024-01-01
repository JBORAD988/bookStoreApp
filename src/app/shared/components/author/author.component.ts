import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit{

  // @Input()
  // set data(value:number){
  //   this._data= ++value;
  // }
  //
  // get data(){
  //   return this._data;
  // }

  // private _data: number;


  public data:number;
  public setData(value: number): void{
    this.data = value;

  }


  // @Input()
  // ShowAuthors: boolean;

  ShowAuthors: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

}
