import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksRoutingModule} from "./books-routing.module";
import {BookDetailsComponent} from "./components/book-details/book-details.component";
// import {HomeComponent} from "../public-components/home/home.component";
import {BooksComponent} from "./books.component";
import {AllBooksComponent} from "./components/all-books/all-books.component";



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,

  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BooksComponent
  ]
})
export class BooksModule { }
