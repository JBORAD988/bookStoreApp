import {Component, OnInit} from '@angular/core';
import {BookModel} from "../../models/book.model";
import {BookService} from "../../services/book.service";
import {CounterService} from "../../../shared/services/counter.service";
import {Counter2Service} from "../../../shared/services/counter2.service";


@Component({
  selector: 'all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],

})
export class AllBooksComponent implements OnInit{

  public books: BookModel[] = [];
  constructor(public bookService: BookService, public _CounterService:Counter2Service) {}
  ngOnInit() {
    this.books = this.bookService.getBooks();
    console.log(this.books)

  }

  public increase(): void{
    this._CounterService.incCounter()
  }

  public decrease():void{
    this._CounterService.decCounter()
  }

}
