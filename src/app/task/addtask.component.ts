import {Component} from '@angular/core';


@Component({
    selector:'addtask',
    template:'<h1>{{title}}</h1>'
})
export class AddTaskComponent{

    title: string ="Add Task"
}