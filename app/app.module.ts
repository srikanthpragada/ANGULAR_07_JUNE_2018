import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './http/books.component';
import { CountriesComponent } from './http/countries.component';
import { SearchCountriesComponent } from './http/search-countries.component';

@NgModule({
  declarations: [
        BooksComponent, CountriesComponent, SearchCountriesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [SearchCountriesComponent]
})
export class AppModule { }
