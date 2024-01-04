import { Component, OnInit, } from '@angular/core';
import {BookService} from "../../services/book.service";
import {BookModel} from "../../../shared/models/book.model";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

// @ViewChild('myForms') myForms : ElementRef;

  hide: boolean = true;

  constructor(private _bookService: BookService) {
  }

  // ngAfterViewChecked() {
  //   console.log(this.myForms)
  //
  // }

  ngOnInit() {
  }

  saveBook(value: any): void{
    console.log(value)
    const book:BookModel = new BookModel()
    book.title = value.title;
    book.author = value.author;
    book.totalPages = value.pages;
    book.price.value = value.price
    this._bookService.addBook(book);

  }


}
