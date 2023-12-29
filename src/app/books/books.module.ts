import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksRoutingModule} from "./books-routing.module";
import {BookDetailsComponent} from "./components/book-details/book-details.component";
import {BooksComponent} from "./books.component";
import {AllBooksComponent} from "./components/all-books/all-books.component";
import {BookService} from "./services/book.service";
import {SharedModule} from "../shared/shared.module";
import { RecentBooksComponent } from './components/recent-books/recent-books.component';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    RecentBooksComponent,

  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BooksComponent,
    SharedModule
  ],

})
export class BooksModule {}
