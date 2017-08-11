import { Component, OnInit } from '@angular/core';

@Component({
    
    selector: 'tasks',
    //template:'<h2>Task App</h2>',
	templateUrl:`./app/task/tasks.component.html`,
	styleUrls:['./app/task/tasks.component.css']
    
    
})
export class TasksComponent {
    
       title: string = "Task app";
	   
	   tasks : any[] = [
	   
		{'Id':'1', 'Title':'Go to Market ssss6565', 'Status':'done'},
		{'Id':'2', 'Title':'Email to Manager', 'Status':'Pending'},
		{'Id':'3', 'Title':'Push Code to GitHub', 'Status':'done'},
		{'Id':'4', 'Title':'Go for Running', 'Status':'Pending'}
	   
	   
	   ];

}