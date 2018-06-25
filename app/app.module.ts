import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebBooksComponent } from './http/webbooks.component';

@NgModule({
  declarations: [
      WebBooksComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [WebBooksComponent]
})
export class AppModule { }
