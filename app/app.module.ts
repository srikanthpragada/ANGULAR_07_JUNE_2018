import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ReactiveLoginComponent } from './forms/reactive-login.component';

@NgModule({
  declarations: [
        ReactiveLoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ReactiveLoginComponent]
})
export class AppModule { }
