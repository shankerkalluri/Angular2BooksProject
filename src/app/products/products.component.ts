import {Component, OnInit} from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
	
    selector: 'products',
    templateUrl: 'app/products/products.component.tpl.html'
    
})
export class ProductsComponent implements OnInit{ 
	
		imgWidth : number =50;
		imgMargin : number =2;
		
			
		tasks : any[]=[];
	
	constructor(private dataService: DataService){}
	
	
	ngOnInit(){
	
		this.tasks = this.dataService.getTasks();
	
	}
}



