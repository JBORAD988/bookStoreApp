import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from "../../models/book.model";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit{

  @Input('all-books') book: BookModel[];

  get books():BookModel[]{
    return this.book;
  }


  constructor() {
  }

  ngOnInit() {

  }

}
