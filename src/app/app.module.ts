import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {BooksComponent} from './books/books.component';
import {DvdComponent} from './dvd/dvd.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {DeveloperBooksComponent} from './developerbooks/developerbooks.component';
import {TasksComponent} from './task/tasks.component';
import {AddTaskComponent} from './task/addtask.component';


import { app_routing } from './app.routing';
import { DataService } from './shared/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, app_routing],
  declarations: [ AppComponent,TasksComponent, HomeComponent,AddTaskComponent, ProductsComponent, 
  BooksComponent,DvdComponent,RegisterComponent,LoginComponent, DeveloperBooksComponent],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }