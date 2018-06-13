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
    message : string = ""

    addTopic(topic : string) 
    {
        this.message = ""

        var idx = this.topics.indexOf(topic)
        if (idx >= 0)
             this.message = "Topic is already existing"
        else             
             this.topics.push(topic)
    }

    deleteTopic(idx : number) 
    {
        if (confirm("Do you want to delete?"))
           this.topics.splice(idx,1)  // Delete item at idx position 
    }
}
