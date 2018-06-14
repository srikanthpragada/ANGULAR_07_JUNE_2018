import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';
import { SecondComponent } from './icc/second.component';
import { FirstComponent } from './icc/first.component';
import { CourseListComponent } from './icc/courselist.component';
import { CourseDetailsComponent } from './icc/coursedetails.component';

@NgModule({
  declarations: [
       CourseListComponent, CourseDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CourseListComponent]
})
export class AppModule { }
