import {Component, OnInit} from '@angular/core';
import {BookModel} from "../../models/book.model";
import {BookService} from "../../services/book.service";
import {Counter2Service} from "../../../shared/services/counter2.service";


@Component({
  selector: 'all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],

})
export class AllBooksComponent implements OnInit{



  private _pageTitle: string;

  public set pageTitle(value: string) {
    this._pageTitle = value;
  }

  public get pageTitle(): string {
    return this._pageTitle;
  }

  public books: BookModel[] = [];
  constructor(public bookService: BookService, public _CounterService:Counter2Service) {}
  ngOnInit() {

    this.pageTitle = 'All Books';
    const allBooks = this.bookService.getBooks();
    allBooks.forEach(b => {
      let obj = new BookModel();
      obj.id= b.id;
      obj.author = b.author;
      obj.price = b.price;
      obj.title = b.title;
      obj.totalPages = b.totalPages;
      this.books.push(obj);
    })

    // this.books = this.bookService.getBooks();
    console.log(this.books)

  }

  public increase(): void{
    this._CounterService.incCounter()
  }

  public decrease():void{
    this._CounterService.decCounter()
  }

}
