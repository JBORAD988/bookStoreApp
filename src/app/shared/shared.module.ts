import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterLink} from "@angular/router";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorComponent } from './components/author/author.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    FooterComponent,
    AuthorComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ToolbarComponent,
    MaterialModule
  ],

  exports: [
    ToolbarComponent,
    FooterComponent,
    MaterialModule,
    AuthorComponent
  ]
})
export class SharedModule { }
