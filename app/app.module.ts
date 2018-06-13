import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { DbDemoComponent } from './dbdemo.component';
import { StructDirComponent } from './structdir.component';


@NgModule({
  declarations: [
       StructDirComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ StructDirComponent]
})
export class AppModule { }
