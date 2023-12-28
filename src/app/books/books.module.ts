import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksRoutingModule} from "./books-routing.module";
import {BookDetailsComponent} from "./components/book-details/book-details.component";
import {BooksComponent} from "./books.component";
import {AllBooksComponent} from "./components/all-books/all-books.component";
import {BookService} from "./services/book.service";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,

  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BooksComponent,
    SharedModule
  ],

})
export class BooksModule {}
