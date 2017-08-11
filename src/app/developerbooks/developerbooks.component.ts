import {Component} from '@angular/core';

@Component({
    selector: 'developerbooks',
    templateUrl: 'app/developerbooks/developerbooks.component.tpl.html',
    
})

export class DeveloperBooksComponent{ 
		
		imgWidth : number =50;

		designers : any[] = [
				{
					
					"DesignerBookName": "PPD wire bound High quality",
					"DesignerBooPrice": 1234,
					"DesignerBooreleaseDate": "Jan 19, 2017",
					"DesignerBooCode":"GDN-0011",
					"DesignerBooKdescription": "PPD wire bound High quality notebook.",
					"imageUrl": "../images/01.jpg"
				},
				{
					
					"DesignerBookName": " Interior Design Course",
					"DesignerBooPrice": 5678,
					"DesignerBooreleaseDate": "March 18, 2017",
					"DesignerBooCode":"GDN-0012",
					"DesignerBooKdescription": "Interior Design Course: Principles, Practices.",
					"imageUrl": "../images/02.jpg"
				},
				{
					
					"DesignerBookName": "The Non-Designer's Design Book",
					"DesignerBooPrice": 3214,
					"DesignerBooreleaseDate": "May 21, 2017",
					"DesignerBooCode":"GDN-0013",
					"DesignerBooKdescription": "Path Finder Finder - A Job Designer.",
					"imageUrl": "../images/03.jpg"
				},
				{
					
					"DesignerBookName": "Fashion Designer",
					"DesignerBooPrice": 2541,
					"DesignerBooreleaseDate": "May 15, 2017",
					"DesignerBooCode":"GDN-0014",
					"DesignerBooKdescription": "Notebook. Designer Wire bound ruled paper.",
					"imageUrl": "../images/04.jpg"
				},
				{
					
					"DesignerBookName": "Thinking with Type",
					"DesignerBooPrice": 1849,
					"DesignerBooreleaseDate": "October 15, 2017",
					"DesignerBooCode":"GDN-0015",
					"DesignerBooKdescription": "Thinking with Type, 2nd revised and expanded edition).",
					"imageUrl": "../images/05.jpg"
				}
			]
		
}

