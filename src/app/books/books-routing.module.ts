import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import {HomeComponent} from "../public-components/home/home.component";
import {RecentBooksComponent} from "./components/recent-books/recent-books.component";
import {AddBookComponent} from "./components/add-book/add-book.component";
import {AddBookReactiveComponent} from "./components/add-book-reactive/add-book-reactive.component";


const routes: Routes = [
  {path:'all-books',component: AllBooksComponent },
  {path: 'recent-books', component: RecentBooksComponent },
  {path:'new',component: AddBookComponent},
  {path:'new-reactive' ,component: AddBookReactiveComponent},
  { path: 'home', component: HomeComponent },
  { path: ':id', component: BookDetailsComponent },

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
