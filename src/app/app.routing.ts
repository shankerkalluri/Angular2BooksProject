import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from './task/tasks.component';
import {AddTaskComponent} from './task/addtask.component';
import { HomeComponent }     from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {BooksComponent} from './books/books.component';
import {DvdComponent} from './dvd/dvd.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {DeveloperBooksComponent} from './developerbooks/developerbooks.component';


const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  
  { path: 'home',  component: HomeComponent },
  { path: 'brand', component: TasksComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'dvd', component: DvdComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'developerbooks', component: DeveloperBooksComponent}
  
  
  
];	

export const app_routing = RouterModule.forRoot(app_routes);