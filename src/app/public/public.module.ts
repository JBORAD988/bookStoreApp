import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicRoutingModule} from "./public.routing.module";
import {BookDetailsComponent} from "./components/book-details/book-details.component";
import {HomeComponent} from "./components/home/home.component";
import {PublicComponent} from "./public.component";
import {AllBooksComponent} from "./components/all-books/all-books.component";



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    HomeComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
