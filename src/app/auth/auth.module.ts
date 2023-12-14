import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
