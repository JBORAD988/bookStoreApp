import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BooksRoutingModule} from "./books-routing.module";
import {BookDetailsComponent} from "./components/book-details/book-details.component";
import {BooksComponent} from "./books.component";
import {AllBooksComponent} from "./components/all-books/all-books.component";
import {BookService} from "./services/book.service";
import {SharedModule} from "../shared/shared.module";
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    RecentBooksComponent,
    BookCardComponent,
    AddBookComponent,

  ],
    imports: [
        CommonModule,
        BooksRoutingModule,
        BooksComponent,
        SharedModule,
        NgOptimizedImage,
      FormsModule
    ],

})
export class BooksModule {}
