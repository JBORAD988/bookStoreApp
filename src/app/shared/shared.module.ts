import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterLink} from "@angular/router";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    FooterComponent
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
  ]
})
export class SharedModule { }
