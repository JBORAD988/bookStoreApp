import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { AuthComponent } from './auth/auth.component';
import {SharedModule} from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {HomeComponent} from "./public-components/home/home.component";
import {TestService} from "./shared/services/test.service";
import {counterFactory} from "./shared/services/counter.factory";

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    AuthComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    // AuthModule,
    // UserModule,
    // PublicModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],

  providers: [
    counterFactory,
    TestService,
    { provide: 'appTitle', useValue: { title: 'this is title', description: 'this is description' } },

  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
