import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import {HomeComponent} from "../public-components/home/home.component";


const routes: Routes = [
  {path:'all-books',component: AllBooksComponent },
  // { path: 'book-details/:id/author/:authorId', component: BookDetailsComponent },
  { path: ':id', component: BookDetailsComponent },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
