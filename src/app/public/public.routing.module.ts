import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: 'all-books', component: AllBooksComponent },
      // { path: 'book-details/:id', component: BookDetailsComponent },
      { path: 'book-details', component: BookDetailsComponent },
      { path: 'home', component: HomeComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}