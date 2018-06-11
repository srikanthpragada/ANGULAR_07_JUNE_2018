import { Component } from '@angular/core';

@Component({
    selector: 'course',
    templateUrl: './course.component.html'
})
export class CourseComponent  {
    title : string = 'Angular 6'
    duration : number = 15
    fee : number = 1500
    topics : string [] = ['Data Binding','Forms','Services','Ajax']


}
