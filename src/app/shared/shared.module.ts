import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterLink} from "@angular/router";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ToolbarComponent,
    MaterialModule
  ],

  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
