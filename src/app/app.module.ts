import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { Router } from '@angular/router';
import { UserService } from './Services/user.service';
import { HomeService } from './Services/home.service';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
import { NextDirective } from './Directive/next.directive';
import { PrevDirective } from './Directive/prev.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserlistingComponent,
    CreateuserComponent,
    SliderComponent,
    NextDirective,
    PrevDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
