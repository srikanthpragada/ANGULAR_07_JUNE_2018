import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { DbDemoComponent } from './dbdemo.component';


@NgModule({
  declarations: [
       DbDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DbDemoComponent]
})
export class AppModule { }
