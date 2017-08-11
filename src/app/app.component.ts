
import { Component } from '@angular/core';
import {TasksComponent} from './task/tasks.component';

@Component({ 
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  
  
  constructor() {

  }
  
}



