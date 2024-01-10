import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterLink} from "@angular/router";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorsAddressComponent } from './components/authors-address/authors-address.component';
import {HttpClientModule} from "@angular/common/http";
import { BoolformatPipe } from './pipes/boolformat.pipe';



@NgModule({
  declarations: [
    NotFoundComponent,
    FooterComponent,
    AuthorComponent,
    AuthorsAddressComponent,
    BoolformatPipe
  ],
  imports: [
    CommonModule,
    RouterLink,
    ToolbarComponent,
    MaterialModule, HttpClientModule
  ],

  exports: [
    ToolbarComponent,
    FooterComponent,
    MaterialModule,
    AuthorComponent,
    AuthorsAddressComponent,
    HttpClientModule,
    BoolformatPipe
  ]
})
export class SharedModule { }
