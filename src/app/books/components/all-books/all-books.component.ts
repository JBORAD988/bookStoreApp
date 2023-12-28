import {Component, OnInit} from '@angular/core';
import {BookModel} from "../../models/book.model";
import {BookService} from "../../services/book.service";


@Component({
  selector: 'all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],

})
export class AllBooksComponent implements OnInit{

  public books: BookModel[] = [];
  constructor(public bookService: BookService) {}
  ngOnInit() {
    this.books = this.bookService.getBooks();
    console.log(this.books)

  }

}
