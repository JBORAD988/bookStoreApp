import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from "../../../shared/models/book.model";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit{

  @Input('all-books')
  get books():BookModel[]{
    return this._books;
  }

  set books(books: BookModel[]){
    books.map(x=>x.title ='Title:  '+x.title);
    this._books=books;
  }

  private _books:BookModel[];  //now in this code all-books takes Alias of book so the now books has no more use now we use to all-books insted of books in all components file
  constructor() {
  }

  ngOnInit() {

  }

}
