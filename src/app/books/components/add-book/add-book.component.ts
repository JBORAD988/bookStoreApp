import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit , AfterViewChecked{



  constructor() {
  }

  ngAfterViewChecked() {

  }

  ngOnInit() {
  }

  saveBook(value: any): void{
    console.log(value)

  }


}
